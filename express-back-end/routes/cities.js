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
  let lat = null;
  let long = null;

  let city;
  router.get('/api/cities', async (req, res) => {
    console.log('Getting city name')
    // axios.defaults.baseURL = 'https://maps.googleapis.com';
    
    axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.query.city}&types=geocode&language=fr&key=${GOOGLE_KEY}`)
    .then(results => {
      console.log(results.data);
      res.json(results.data);
    });
  });

  router.post('/api/latlong/:city', (req, res) => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.city}&key=${GOOGLE_KEY}`)
    .then(result => {
      lat = result.data.results[0].geometry.location.lat;
      long = result.data.results[0].geometry.location.lng;
    })
    .then(() => res.sendStatus(200))
  })
  
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
    res.sendStatus(200);
  });

  router.get(`/api/attractions`, (req,res) => {
    const attractionList = [];
    Promise.all([
      axios.get(`https://api.foursquare.com/v2/venues/explore?near=${city}?&limit=2&client_id=${FOURSQUARE_KEY}&client_secret=${FOURSQUARE_SECRET}`),
      axios.get(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${long}&maxDistance=150&key=${HIKING_KEY}`),
      axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=${TIX_KEY}&latlong=${lat},${long}`)
    ])
      .then(results => {
        
        // console.log('check foursqaure api', results[0].data.response.groups[0].items)
        // console.log('check hiking api',results[1].data)
        // console.log('check tix api', results[2].data._embedded.events)

        console.log('First api successfully');

        //static photo for testing rendering

        photoList = ['https://vancouver.ca/images/cov/feature/about-vancouver-landing-size.jpg'];
        
        
        for (let item of results[0].data.response.groups[0].items) {
          attractionList.push({
            id: item.venue.id,
            name: item.venue.name,
            description: '',
            review: '',
            lat: item.venue.location.lat,
            long: item.venue.location.lng,
            open_time: '',
            close_time: '',
            visit_duration: 120,
            // photo: item.venue.imgSmallMed, ADDING FROM ANOTHER API
            location: item.venue.location.address
          })
        }
        for (let i = 0; i <= attractionList.length - 1; i ++) {
          // console.log('attraction >>>',attractionList[i].venue.id)
          // axios.get(`https://api.foursquare.com/v2/venues/${attractionList[i].venue.id}/photos?client_id=${FOURSQUARE_KEY}&client_secret=${FOURSQUARE_SECRET}`)
          // .then(results => {
            // console.log('Second api successfully');
            // photoList.push(results.data.response.photos.items[0].suffix);
            // attractionList[i].venue["photo"] = results.data.response.photos.items[0].suffix
            attractionList[i]["photo"] = photoList[0];
            // })
        }

        for (let trail of results[1].data.trails) {
          attractionList.push({
            id: trail.id,
            name: trail.name,
            description: trail.summary,
            review: trail.stars,
            lat: trail.latitude,
            long: trail.longitude,
            open_time: '',
            close_time: '',
            visit_duration: 360,
            photo: trail.imgSmallMed,
            location: trail.location
          })
        }
        for (let event of results[2].data._embedded.events) {
          attractionList.push({
            id: event.id,
            name: event.name,
            description: event.info,
            review: '',
            lat: event._embedded.venues[0].location.latitude,
            long: event._embedded.venues[0].location.longitude,
            open_time: event.dates.start.dateTime,
            close_time: '',
            visit_duration: 180,
            photo: event.images[0].url,
            location: event._embedded.venues[0].name
          })
        }
      })
      .then(() => {
        console.log('test>>>', attractionList)
        res.send(attractionList);
      })

        // }
        // res.json(attractionList);
      // return photoList;
      // console.log('test>>>', attractionList)
      // res.send(attractionList);
      // console.log(res.json([attractionList, photoList]))
    // })
  });

  return router;
}

// module.exports = routes;
