const router = require("express").Router();
const kmeans = require('node-kmeans');
const { getTimeForSchedule } = require('../helpers/schedule')
const { axiosCallback } = require('../helpers/travel_axios');
const { getTravelTime } = require('../helpers/travel_time');
const { end_data } = require('../helpers/timeslot_insert');


module.exports = (db) => {
  router.get('/', (req, res) => {
    db.query(
      `
      SELECT *, itineraries.id AS id FROM itineraries
      JOIN user_itinerary on itineraries.id = user_itinerary.itinerary_id
      WHERE user_itinerary.user_id = $1;
      `, [req.session.userId]
    )
      .then((response) => {
        res.json(response.rows);
      })
  })

  router.get('/:id', (req, res) => {
    db.query(
      `
      SELECT *, timeslots.id AS id FROM timeslots
      FULL OUTER JOIN attractions ON attraction_id = attractions.id
      FULL OUTER JOIN itineraries ON itinerary_id = itineraries.id
      WHERE itinerary_id = $1
      ORDER BY start_time
      ;
      `, [req.params.id]
    )
      .then((response) => {
        res.json(response.rows);
      })
  })

  router.post('/:id', async (req, res) => {
    const getData = await db.query(
      `
      SELECT *, timeslots.id AS id FROM timeslots
      FULL OUTER JOIN attractions ON attraction_id = attractions.id
      FULL OUTER JOIN itineraries ON itinerary_id = itineraries.id
      WHERE itinerary_id = $1
      ORDER BY start_time
      ;
      `, [req.params.id]
    )
    const data = getData.rows
    // console.log('data from db:', data)

    // use kmean library to cluster the locations in order
    let itineraries = [];
    let vectors = new Array();
    for (let i = 0; i < data.length; i++) {
      vectors[i] = [data[i]['latitude'], data[i]['longitude']];
    }
    // calculate number of days for the trip
    const getDays = (start, end) => {
      return Math.round((end - start) / 86400)
    }
    // K refers to number of days
    const cluster = kmeans.clusterize(vectors, { k: getDays(data[0].trip_start, data[0].trip_end) }, (err, res) => {
      if (err) console.error(err);
      else {
        return res;
      }
    });
    //Loop through the result from kmeans function to get the array of attractions
    cluster.groups.forEach(element => {
      for (let i in element.clusterInd) {
        element.clusterInd[i] = data[element.clusterInd[i]]
      }
      itineraries.push(element.clusterInd);
    });

    // dataset after kmean clustering:
    // [[{ attraction }, { attraction }, ...],[{ attraction }, { attraction }, ...],...]
    const trip = getTimeForSchedule(itineraries);
    // console.log('data after kmean:', trip)

    return getTravelTime(trip, axiosCallback)
      .then(() => {
        end_data(trip)
        console.log('data after calculation:', trip)
      })
      // .then(() => res.redirect('/:id'))
      .catch(err => console.log(err));
  })

  router.post('/:id/edit', (req, res) => {
    return db.query(
      `
      UPDATE timeslots
      SET start_time = null, end_time = null
      FROM itineraries
      WHERE itinerary_id = itineraries.id AND itinerary_id = $1;
      `, [req.params.id]
    )
      .then((response) => {
        res.sendStatus(200)
      })
  })

  router.delete('/:tripid/attractions/:attrid', (req, res) => {
    return db.query(`
      DELETE from attractions
      WHERE id = $1;     
    `, [req.params.attrid])
      .then(() => {
        return db.query(`
      SELECT COUNT(*) FROM timeslots
      WHERE itinerary_id = $1;
    `, [req.params.tripid])
      })
      .then((response) => {
        if (!Number(response.rows[0].count) > 0) {
          return db.query(`
          DELETE from itineraries
          WHERE id = $1;
        `, [req.params.tripid])
        }
      })
      .then((response) => {
        res.sendStatus(200)
      })
  })

  return router;
}