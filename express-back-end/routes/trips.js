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
      SELECT DISTINCT itineraries.*, itineraries.id AS id FROM itineraries
      JOIN user_itinerary on itineraries.id = user_itinerary.itinerary_id
      FULL OUTER JOIN timeslots on timeslots.itinerary_id = itineraries.id
      FULL OUTER JOIN attractions on attraction_id = attractions.id
      WHERE user_itinerary.user_id = $1 AND attraction_id IS NOT NULL;
      `, [req.query.user]
    )
      .then((response) => {
        res.json(response.rows);
      })
  })

  router.get('/:id', (req, res) => {
    db.query(
      `
      SELECT timeslots.*, attractions.*, itineraries.*, first_name, timeslots.id AS id FROM timeslots
      FULL OUTER JOIN attractions ON attraction_id = attractions.id
      FULL OUTER JOIN itineraries ON itinerary_id = itineraries.id
      FULL OUTER JOIN users ON submitted_by = users.id
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

    // console.log('number of attractions', data.length)
    // console.log('planned days length', getDays(data[0].trip_start, data[0].trip_end))
    if (data.length >= getDays(data[0].trip_start, data[0].trip_end)) {
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
    } else {
      // console.log('attractions data for the trip', data)
      for (const attraction of data) {
        itineraries.push([attraction]);
      }

    }

    // dataset after kmean clustering:
    // [[{ attraction }, { attraction }, ...],[{ attraction }, { attraction }, ...],...]
    const trip = getTimeForSchedule(itineraries);
    // console.log('data after kmean:', trip)

    return getTravelTime(trip, axiosCallback)
      .then(() => end_data(trip))
      .then(() => res.sendStatus(200))
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
      .then(() => {
        return db.query(`
      DELETE from timeslots
      WHERE itinerary_id = $1 AND travel_mode IS NOT NULL;
      `, [req.params.id])
      })
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

  router.post('/:tripid/invite', (req, res) => {
    return db.query(`
      SELECT COUNT(*) FROM user_itinerary
      WHERE user_id = (SELECT id FROM users WHERE email = $1) AND itinerary_id = $2;
    `, [req.body.user, req.params.tripid])
      .then((res) => {
        if (Number(res.rows[0].count) === 0) {
          return db.query(`
          INSERT INTO user_itinerary(user_id, itinerary_id)
          VALUES ((SELECT id FROM users WHERE email = $1), $2);
        `, [req.body.user, req.params.tripid])
        } else {
          throw new Error;
        }
      })
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(400))
  })

  router.get('/:tripid/users', (req, res) => {
    db.query(`
      SELECT * FROM user_itinerary
      JOIN users ON user_id = users.id
      WHERE itinerary_id = $1;
    `, [req.params.tripid])
      .then((response) => {
        res.json(response.rows)
      })
  })

  return router;
}