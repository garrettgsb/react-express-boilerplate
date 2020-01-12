const router = require("express").Router();
const GOOGLE_KEY = process.env.GOOGLE_API_KEY;
const FOURSQUARE_KEY = process.env.FOURSQUARE_API_KEY;
const FOURSQUARE_SECRET = process.env.FOURSQUARE_SECRET_KEY;
const HIKING_KEY = process.env.HIKING_API;
const TIX_KEY = process.env.TIX_API;
const axios = require('axios');
const moment = require('moment');
// const request = require('requestn-promise-native');

module.exports = (db) => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  router.get('/', (req, res) => {
    axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.query.city}&types=geocode&language=fr&key=${GOOGLE_KEY}`)
    .then(results => {
      res.json(results.data);
    });
  });

  router.post('/', (req, res) => {
    console.log('Post itinerary successfully');
    let itinerariesId;
    const userId = req.query.user;
    console.log(req.query.user)
    const { city, cityImg, tripStart, tripEnd } = req.body;
    db.query(
      `SELECT * FROM itineraries
      WHERE city = $1 AND trip_start = $2 AND trip_end = $3;
      `, [city, tripStart, tripEnd])
      .then(query => {
        const data = query.rows[0];
        console.log('get itinerary from database', data)
        if (!data) {
          db.query(
            `INSERT INTO itineraries (
              city, city_img, trip_start, trip_end
            ) VALUES (
              $1, $2, $3, $4
            )
            RETURNING id;
            `, [city, cityImg, tripStart, tripEnd])
              .then(query => {
                itinerariesId = query.rows[0].id;
                return db.query(`INSERT INTO user_itinerary (
                  user_id, itinerary_id
                ) VALUES (
                  $1, $2
                )
                `,[userId, itinerariesId])
              })
              .then(() =>
                res.json(itinerariesId)
              )
              .catch((err) => {
                console.log(err);
                res.sendStatus(500);
              })              
        } else {
          res.json(data.id);
        }
      })
  });

  router.get('/:itinerariesId', (req, res) => {
    const attractionList = [];
    const itinerariesId = req.params.itinerariesId
    let city;
    let tripStart;
    let tripEnd;

    db.query(
      `SELECT city, trip_start, trip_end FROM itineraries
      WHERE  itineraries.id = $1;
      `,[itinerariesId])
    .then(query => { 
      city = query.rows[0].city;
      tripStart = query.rows[0].trip_start;
      tripEnd = query.rows[0].trip_end;

      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${GOOGLE_KEY}`)
      .then(results => {
        const {lat, lng} = results.data.results[0].geometry.location;
        return Promise.all([
          axios.get(`https://api.foursquare.com/v2/venues/explore?near=${city}?&limit=5&client_id=${FOURSQUARE_KEY}&client_secret=${FOURSQUARE_SECRET}`),
          axios.get(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lng}&maxDistance=150&key=${HIKING_KEY}`),
          // axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=${TIX_KEY}&latlong=${lat},${lng}`)
        ])
      })
      .then(results => {
        console.log('First api successfully');
        for (let item of results[0].data.response.groups[0].items) {
          const category = item.venue.categories[0].shortName;
          if (category.includes("Park") || category.includes("Beach") || category.includes("Trail") || category.includes("Garden"))  {
            attractionList.push({
              id: item.venue.id,
              name: item.venue.name,
              description: '',
              review: '',
              lat: item.venue.location.lat,
              long: item.venue.location.lng,
              open_time: 32400,
              close_time: 64800,
              visit_duration: 120,
              location: item.venue.location.address,
              category: "SCENERY"
            })
          } else if (category.includes("Store") || category.includes("Shop") || category.includes("Market") | category.includes("Supermarket") | category.includes("Mall")) {
            attractionList.push({
              id: item.venue.id,
              name: item.venue.name,
              description: '',
              review: '',
              lat: item.venue.location.lat,
              long: item.venue.location.lng,
              open_time: 32400,
              close_time: 64800,
              visit_duration: 120,
              location: item.venue.location.address,
              category: "SHOPPING"
            })
          } else if (category.includes("Museum")) {
            attractionList.push({
              id: item.venue.id,
              name: item.venue.name,
              description: '',
              review: '',
              lat: item.venue.location.lat,
              long: item.venue.location.lng,
              open_time: 32400,
              close_time: 64800,
              visit_duration: 120,
              location: item.venue.location.address,
              category: "MUSEUM"
            })
          } else if (category.includes("Restaurant") || category.includes("Coffee Shop") || category.includes("Eatery")) {
            attractionList.push({
              id: item.venue.id,
              name: item.venue.name,
              description: '',
              review: '',
              lat: item.venue.location.lat,
              long: item.venue.location.lng,
              open_time: 32400,
              close_time: 64800,
              visit_duration: 120,
              location: item.venue.location.address,
              category: "RESTAURANTS/COFFEE SHOPS"
            })
          }

        }
        for (let i = 0; i <= attractionList.length - 1; i ++) {
          axios.get(`https://api.foursquare.com/v2/venues/${attractionList[i].id}/photos?client_id=${FOURSQUARE_KEY}&client_secret=${FOURSQUARE_SECRET}`)
          .then(results => {
            console.log('Second api successfully');
            attractionList[i].photo = results.data.response.photos.items[0].prefix + "500x500" + results.data.response.photos.items[0].suffix;
            console.log(attractionList[i])
          })
        }

        for (let trail of results[1].data.trails) {
          if (trail.imgMedium !== "") {
            attractionList.push({
              id: trail.id,
              name: trail.name,
              description: trail.summary,
              review: trail.stars,
              lat: trail.latitude,
              long: trail.longitude,
              open_time: 32400,
              close_time: 64800,
              visit_duration: 21600,
              photo: trail.imgMedium,
              location: trail.location,
              category: 'TRAILS'
            })
          }
        }
        // for (let event of results[2].data._embedded.events) {
        //   const test = moment.utc(event.dates.start.dateTime).format();
        //   console.log(test)  
        //   attractionList.push({
        //     id: event.id,
        //     name: event.name,
        //     description: event.info,
        //     review: '',
        //     lat: event._embedded.venues[0].location.latitude,
        //     long: event._embedded.venues[0].location.longitude,
        //     open_time: event.dates.start.dateTime,
        //     close_time: '',
        //     visit_duration: 180,
        //     photo: event.images[0].url,
        //     location: event._embedded.venues[0].name
        //   })
        //   // console.log('check time format', moment.utc(event.dates.start.dateTime).local().format())
        // }
      })
      .then(() => {
        // console.log('check point 2',attractionList)
        res.json([attractionList, city]);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      })
    })
  });

  router.post(`/:itinerariesId/`, (req, res) => {
    console.log("Adding attraction to database");
    const {
      name,
      description,
      review,
      lat,
      long,
      open_time,
      close_time,
      visit_duration,
      photo,
      location,
    } = req.body.attraction;
    const itinerariesId = req.params.itinerariesId;
    db.query(
      `INSERT INTO attractions (
        name,
        description,
        review,
        latitude,
        longitude,
        open_time,
        close_time,
        visit_duration,
        photo,
        location,
        submitted_by
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11
      )
      RETURNING id;
      `,[name, description, review ? review : null, lat, long, open_time, close_time, visit_duration, photo, location, req.query.user])
    .then(query => {
      const activityId = query.rows[0].id;
      db.query(
        `INSERT INTO timeslots (
          start_time,
          end_time,
          itinerary_id,
          attraction_id
        ) VALUES (
          $1, $2, $3, $4
        )`, [ null, null, itinerariesId , activityId]
      )
    })
  });

  return router;
}

// module.exports = routes;
