const router = require("express").Router();
const GOOGLE_KEY = process.env.GOOGLE_API_KEY;
const FOURSQUARE_KEY = process.env.FOURSQUARE_API_KEY;
const FOURSQUARE_SECRET = process.env.FOURSQUARE_SECRET_KEY;
const axios = require('axios');

module.exports = (db) => {

  router.get('/api/cities', async (req, res) => {
    console.log('check', req.query.city)
    console.log('Getting city name')
    // axios.defaults.baseURL = 'https://maps.googleapis.com';
    
    await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.query.city}&types=geocode&language=fr&key=${GOOGLE_KEY}`)
    .then(results => {
      // console.log(results)
      return results;

    });

  });
  
  router.post('/explore/city/:data', (req, res) => {
    console.log('post itineraries successfully');
    console.log('itinerary',req.params)
    const data = req.params.data.split(',');
    console.log(data);
    const city = data[0];
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
  });

  router.get('explore/attractions', async (req,res) => {

    await axios.get(`https://api.foursquare.com/v2/venues/explore?near=sydney?&client_id=${FOURSQUARE_KEY}&client_secret=${FOURSQUARE_SECRET}`)
    .then(results => {
      // console.log(results)
      return results;
    })
  })
  return router;
}

// module.exports = routes;