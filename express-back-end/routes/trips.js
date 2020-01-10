const router = require("express").Router();

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

    // SO end_data we received will be [[obj, obj(transit), obj...],[obj,obj(transit), obj...], ...] 

    // Default start_time for each day will be 12am
    // Default start_time for first location in timeslot will be 12am + 9hour (9am in the morning)
    // const day_start = trip_start + (9 * 3600) + (86400 * dayIndex)
    // let start_time = day_start

    // loop through end_data

    // loop start:

    // if item === Number
    // start_time = start_time
    // end_time = start_time + number
    // or else
    // start_time = start_time
    // end_time = start_time + visit_duration (default as 1 hour if api not working)

    // db insert
    // if travel_mode === null, insert into db table timeslots with start_time, end_time, itinerary_id, attraction_id, travel_mode with travel_mode value to be null 
    // else, insert into db table timeslots with start_time, end_time, itinerary_id, attraction_id, travel_mode with attraction_id value to be null
    db.query(`
    `, [])
      .then(response => console.log(response))
      .catch(err => console.log(err));

    // update start_time = end_time

    // loop to next item

  })

  return router;
}