const router = require("express").Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    console.log('trip route',req.session.userId)
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

  router.post('/:id', (req, res) => {
    console.log('req data', req)

    // pass req.body to kmean function to cluster the locations in order

    // dataset after kmean clustering:
    // [[{ attraction }, { attraction }, ...],[{ attraction }, { attraction }, ...],...]

    // loop through each day cluster in clusters array,
    // loop through each location object in cluster array,
    // check if current and next element 's travel_mode is null,
    // if so, take the first two location objects in cluster array to call google direction api to get travel duration between these two location, then insert the travelTime object that contain travel duration and travel mode in between these two locations
    axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=Stanley+Park&destination=David+Lam+Park&mode=transit&key=${GOOGLE_KEY}`)
      // traval_duration = response.data.routes[0].legs[0].duration, total travel_duration bewteen locations
      // direction_steps = response.data.routes[0].legs[0].steps, if direction_steps contain more than one object, set travel mode to bus, or else it will be walking
      .then(response => console.log('res after google api direction call', response))
      .catch(err => console.log('res after google api direction call', err))
    // or else, skip go to the next item

    // SO data_after_api_call we received will be [[obj, obj(transit), obj...],[obj,obj(transit), obj...], ...] 

    // function generate end_data before db query
    // loop through trip array after data_after_api_call
    // Default start_time for each day will be 12am
    // Default start_time for first location in timeslot will be 12am + 9hour (9am in the morning)
    // const day_start = trip_start + (9 * 3600) + (86400 * dayIndex)
    // let start_time = day_start

    // loop through attraction obj in specific day
    // if object.attraction_id existed
    // set start_time = start_time
    // end_time = start_time + visit_duration ( or default as 1 hour if api not working)
    // db insert into db table timeslots with start_time, end_time, itinerary_id, attraction_id, travel_mode
    // update start_time = end_time

    // or else
    // start_time = start_time
    // end_time = start_time + duration
    // pass in iternerary_id
    // set attraction_id = null
    // db insert into db table timeslots with start_time, end_time, itinerary_id, attraction_id, travel_mode
    // update start_time = end_time

    db.query(`
    `, [])
      .then(response => console.log(response))
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

  router.delete('/:tripid/attractions/:attrid' , (req, res) => {
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
      INSERT INTO user_itinerary(user_id, itinerary_id)
      VALUES ((SELECT id FROM users WHERE email = $1), $2);
    `, [req.body.user, req.params.tripid])
    .then(() => {
      res.sendStatus(200)
    })
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