module.exports = {
  // function generate end_date: update start_time, end_time for attraction object and travel object
  end_data: (trip) => {
    // get trip_start for current itinerary
    const trip_start = trip[0][0].trip_start

    // loop through day array in trip array
    for (let dayIndex in trip) {

      // intialize the start_time for current day
      const day_start = Number(trip_start) + (9 * 3600) + (86400 * [dayIndex])
      let start_time = day_start

      // loop through object of current day => eg: [{ attraction }, { travel }, { attraction }, ...]
      for (const attraction of trip[dayIndex]) {

        // for attraction obj
        if (attraction.attraction_id) {
          // update start_time
          attraction.start_time = start_time
          // update end_time (default as 1 hour if visit_duration for attraction is not available)
          if (attraction.visit_duration === null) {
            attraction.end_time = Number(attraction.start_time) + 3600
          } else {
            attraction.end_time = Number(attraction.start_time) + Number(attraction.visit_duration)
          }

          attraction.itinerary_id = trip[0][0].itinerary_id

          // db insert into db table timeslots with start_time, end_time, itinerary_id, attraction_id, travel_mode
          db.query(`
            INSERT INTO timeslots (start_time, end_time, itinerary_id, attraction_id, travel_mode)
            VALUES($1, $2, $3, $4, $5)
            RETURNING *;
          `, [attraction.start_time, attraction.end_time, attraction.itinerary_id, attraction.attraction_id, attraction.travel_mode])
          // console.log(attraction.start_time, attraction.end_time, attraction.itinerary_id, attraction.attraction_id, attraction.travel_mode)

          // update start_time for next item in the loop
          start_time = attraction.end_time

        } else {
          // for travel obj
          // update/insert start_time
          attraction.start_time = start_time
          // update/insert end_time
          attraction.end_time = Number(start_time) + Number(attraction.duration)
          // update/insert itinerary_id,  attraction_id 
          attraction.itinerary_id = trip[0][0].itinerary_id
          attraction.attraction_id = null

          // db insert into db table timeslots with start_time, end_time, itinerary_id, attraction_id, travel_mode
          db.query(`
            INSERT INTO timeslots (start_time, end_time, itinerary_id, attraction_id, travel_mode)
            VALUES($1, $2, $3, $4, $5)
            RETURNING *;
          `, [attraction.start_time, attraction.end_time, attraction.itinerary_id, attraction.attraction_id, attraction.travel_mode])
          // console.log(attraction.start_time, attraction.end_time, attraction.itinerary_id, attraction.attraction_id, attraction.travel_mode)

          // update start_time for next item in the loop
          start_time = attraction.end_time
        }
        // console.log(`Day ${Number(dayIndex) + 1}`, attraction)
      }
    }
  }
}