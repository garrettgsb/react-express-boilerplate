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
    console.log('Getting city name')
    // axios.defaults.baseURL = 'https://maps.googleapis.com';
    
    axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.query.city}&types=geocode&language=fr&key=${GOOGLE_KEY}`)
    .then(results => {
      // console.log(results.data);
      res.json(results.data);
    });
  });
  
  router.post(`/explore/:${city}/:data`, (req, res) => {
    console.log('Post itinerary successfully');
    const data = req.params.data.split(',');
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

  router.get(`/api/attractions`, (req,res) => {
    console.log('>>>>Check get to city')
    console.log(city);
    axios.get(`https://api.foursquare.com/v2/venues/explore?near=${city}?&client_id=${FOURSQUARE_KEY}&client_secret=${FOURSQUARE_SECRET}`)
    .then(results => {
      let photoList = [];
      const attractionList = results.data.response.groups[0].items;
      // res.json(attractionList);
      console.log('first api');
      console.log(attractionList)
      attractionList.map(attraction => {
        // console.log('attraction >>>',attraction)
        axios.get(`https://api.foursquare.com/v2/venues/${attraction.venue.id}/photos?client_id=${FOURSQUARE_KEY}&client_secret=${FOURSQUARE_SECRET}`)
        .then(results => {
          console.log('second api');
          photoList.push(results.data.response.photos.items[0]);
          console.log(photoList)
        })
      })
      res.json(attractionList);
    })
  });

  return router;
}

// module.exports = routes;
