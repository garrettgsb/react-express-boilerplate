const router = require("express").Router();
const GOOGLE_KEY = process.env.GOOGLE_API_KEY;
const axios = require('axios');

module.exports = (db) => {

  router.get('/api/cities', (req, res) => {
    console.log('Getting city name')
    axios.defaults.baseURL = 'https://maps.googleapis.com';
    
    axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${GOOGLE_KEY}`)
    .then(results => {
      console.log(results.data.candidates[0].name)
      return results;

    });

  });
  // router.post('/api/cities', function(req, res) {
  //   console.log('hello')
    
  //   axios.defaults.baseURL = 'https://maps.googleapis.com';
  //   axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  //   // // axios.get(`http://localhost:8080/api`)
  //   axios.get(`/maps/api/place/findplacefromtext/json?input=${search}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${GOOGLE_KEY}`)
  //   .then(results => console.log(results));
  //   // exampleFunction(req.query, function(err, doc){
  //   //     if(err)
  //   //         console.log(err);
  //   //     response.status(200).json(doc);
  //   // })
  // });
  
  // router.post('api/itineraries', (req, res)) => {
  //   db.query(
  //     `INSERT INTO itineraries (
  //       city, city_img, start_time, end_time
  //     ) VALUES (
  //       $1, $2, $3, $4
  //     )
  //     `
  //   )
  // }
  return router;
}

// module.exports = routes;