const needle = require('needle');
require('dotenv').config()
// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

modules.exports = getLatLngFromLocation = function(location) {
  return new Promise((resolve, reject) => {
    needle.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.GOOGLE_MAPS_GEOCODE_API_KEY}`, (error, response) => {
      if (error) reject(error);
      if (response.body.results){
        resolve(response.body.results[0].geometry.location);
      } else {
        resolve(null);
      }
    });
  }) 
}


