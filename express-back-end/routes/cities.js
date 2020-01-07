const router = require("express").Router();
const GOOGLE_KEY = process.env.GOOGLE_API_KEY;
const FOURSQUARE_KEY = process.env.FOURSQUARE_API_KEY;
const FOURSQUARE_SECRET = process.env.FOURSQUARE_SECRET_KEY;
const axios = require('axios');
const moment = require('moment');
// const request = require('requestn-promise-native');

module.exports = (db) => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  let city;
  router.get('/api/cities', async (req, res) => {
    console.log('check', req.query.city)
    console.log('Getting city name')
    // axios.defaults.baseURL = 'https://maps.googleapis.com';
    
    axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.query.city}&types=geocode&language=fr&key=${GOOGLE_KEY}`, {
      CancelToken: source.token
    })
    .catch(function(thrown) {
      if (axios.isCancel(thrown)) {
          console.log('Request canceled', thrown.message);
      }
    })
    .then(results => {
      // return results;
      console.log(results.data);
      res.json(results.data);
    });
  });
  
  router.post(`/explore/:${city}/:data`, (req, res) => {
    console.log('post itinerary successfully');
    const data = req.params.data.split(',');
    console.log(data);
    city = data[0];
    const cityImg = data[1];
    const startTime = data[2];
    const endTime = data[3];
    db.query(
      `INSERT INTO itineraries (
        city, city_img, start_time, end_time
      ) VALUES (
        $1, $2, $3, $4
      )
      `,[city, cityImg, startTime, endTime]
    )
    res.send(200);
  });

  router.get(`/explore/:${city}`, (req,res) => {
    console.log('check get to city')
    db.query(
      `
      SELECT * FROM itineraries
      JOIN timeslots ON attractions.id = timeslots.attraction_id
      JOIN itineraries ON timeslots.itinerary_id = itineraries.id
      WHERE itinerary_id = $1
      ;
      `, [req.params.id]
    )
    .then((response) => {
      res.json(response.rows);
      axios.get(`https://api.foursquare.com/v2/venues/explore?near=sydney?&client_id=${FOURSQUARE_KEY}&client_secret=${FOURSQUARE_SECRET}`)
      .then(results => {
        console.log(results)
        return results;
      })
    })
    res.send(200);
  })
  return router;
}

// module.exports = routes;