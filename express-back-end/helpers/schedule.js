const kmeans = require('node-kmeans');
const axios = require('axios');

// sample data
const data = [
  {
    "id": 14,
    "start_time": null,
    "end_time": null,
    "itinerary_id": 3,
    "attraction_id": 9,
    "travel_mode": null,
    "name": "Central Park",
    "description": null,
    "review": 5,
    "latitude": 40.785091,
    "longitude": -73.968285,
    "open_time": null,
    "close_time": null,
    "visit_duration": null,
    "photo": "https://lonelyplanetimages.imgix.net/a/g/hi/t/e169d0c6394f2e1f46eea3f653f2b7b4-central-park.jpg",
    "location": null,
    "submitted_by": null,
    "city": "New York City",
    "city_img": "https://lonelyplanetimages.imgix.net/a/g/hi/t/21c6ef0ba96e0ce5107a91c4506e2df7-statue-of-liberty.jpg",
    "trip_start": "1591747200",
    "trip_end": "1592179200"
  },
  {
    "id": 15,
    "start_time": null,
    "end_time": null,
    "itinerary_id": 3,
    "attraction_id": 10,
    "travel_mode": null,
    "name": "Ellis Island",
    "description": null,
    "review": 5,
    "latitude": 40.6997222,
    "longitude": -74.0394444,
    "open_time": null,
    "close_time": null,
    "visit_duration": null,
    "photo": "https://lonelyplanetimages.imgix.net/a/g/hi/t/10dde96588c6cddf880e59c2f99f1fdd-ellis-island.jpg",
    "location": null,
    "submitted_by": null,
    "city": "New York City",
    "city_img": "https://lonelyplanetimages.imgix.net/a/g/hi/t/21c6ef0ba96e0ce5107a91c4506e2df7-statue-of-liberty.jpg",
    "trip_start": "1591747200",
    "trip_end": "1592179200"
  },
  {
    "id": 16,
    "start_time": null,
    "end_time": null,
    "itinerary_id": 3,
    "attraction_id": 11,
    "travel_mode": null,
    "name": "Metropolitan Museum of Art",
    "description": null,
    "review": 5,
    "latitude": 40.778965,
    "longitude": -73.962311,
    "open_time": null,
    "close_time": null,
    "visit_duration": null,
    "photo": "https://static01.nyt.com/images/2019/03/21/arts/21metcontemp-item1/2121metcontemp-item1-jumbo.jpg",
    "location": null,
    "submitted_by": null,
    "city": "New York City",
    "city_img": "https://lonelyplanetimages.imgix.net/a/g/hi/t/21c6ef0ba96e0ce5107a91c4506e2df7-statue-of-liberty.jpg",
    "trip_start": "1591747200",
    "trip_end": "1592179200"
  },
  {
    "id": 17,
    "start_time": null,
    "end_time": null,
    "itinerary_id": 3,
    "attraction_id": 12,
    "travel_mode": null,
    "name": "Empire State Building",
    "description": null,
    "review": 5,
    "latitude": 40.748817,
    "longitude": -73.985428,
    "open_time": null,
    "close_time": null,
    "visit_duration": null,
    "photo": "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/33/e6.jpg",
    "location": null,
    "submitted_by": null,
    "city": "New York City",
    "city_img": "https://lonelyplanetimages.imgix.net/a/g/hi/t/21c6ef0ba96e0ce5107a91c4506e2df7-statue-of-liberty.jpg",
    "trip_start": "1591747200",
    "trip_end": "1592179200"
  },
  {
    "id": 18,
    "start_time": null,
    "end_time": null,
    "itinerary_id": 3,
    "attraction_id": 13,
    "travel_mode": null,
    "name": "Brooklyn Bridge",
    "description": null,
    "review": 5,
    "latitude": 40.70569,
    "longitude": -73.99639,
    "open_time": null,
    "close_time": null,
    "visit_duration": null,
    "photo": "https://loving-newyork.com/wp-content/uploads/2016/07/Brooklyn-Bridge_170614090305011-1600x960.jpg",
    "location": null,
    "submitted_by": null,
    "city": "New York City",
    "city_img": "https://lonelyplanetimages.imgix.net/a/g/hi/t/21c6ef0ba96e0ce5107a91c4506e2df7-statue-of-liberty.jpg",
    "trip_start": "1591747200",
    "trip_end": "1592179200"
  },
  {
    "id": 19,
    "start_time": null,
    "end_time": null,
    "itinerary_id": 3,
    "attraction_id": 14,
    "travel_mode": null,
    "name": "Statue of Liberty",
    "description": null,
    "review": 5,
    "latitude": 40.689247,
    "longitude": -74.044502,
    "open_time": null,
    "close_time": null,
    "visit_duration": null,
    "photo": "https://lonelyplanetimages.imgix.net/a/g/hi/t/21c6ef0ba96e0ce5107a91c4506e2df7-statue-of-liberty.jpg",
    "location": null,
    "submitted_by": null,
    "city": "New York City",
    "city_img": "https://lonelyplanetimages.imgix.net/a/g/hi/t/21c6ef0ba96e0ce5107a91c4506e2df7-statue-of-liberty.jpg",
    "trip_start": "1591747200",
    "trip_end": "1592179200"
  },
  {
    "id": 20,
    "start_time": null,
    "end_time": null,
    "itinerary_id": 3,
    "attraction_id": 15,
    "travel_mode": null,
    "name": "Coney Island",
    "description": null,
    "review": 5,
    "latitude": 40.57788,
    "longitude": -73.99403,
    "open_time": null,
    "close_time": null,
    "visit_duration": null,
    "photo": "https://lp-cms-production.imgix.net/features/2019/08/amusement-coney-island-shutterstockRF_332266760-08ffe08a73d3.jpg",
    "location": null,
    "submitted_by": null,
    "city": "New York City",
    "city_img": "https://lonelyplanetimages.imgix.net/a/g/hi/t/21c6ef0ba96e0ce5107a91c4506e2df7-statue-of-liberty.jpg",
    "trip_start": "1591747200",
    "trip_end": "1592179200"
  },
  {
    "id": 21,
    "start_time": null,
    "end_time": null,
    "itinerary_id": 3,
    "attraction_id": 16,
    "travel_mode": null,
    "name": "Grand Central Terminal",
    "description": null,
    "review": 5,
    "latitude": 40.752655,
    "longitude": -73.977295,
    "open_time": null,
    "close_time": null,
    "visit_duration": null,
    "photo": "https://untappedcities-wpengine.netdna-ssl.com/wp-content/uploads/2013/03/Grand-Central-Terminal-Aerial-View-from-Glass-Walkways-NYC.jpg",
    "location": null,
    "submitted_by": null,
    "city": "New York City",
    "city_img": "https://lonelyplanetimages.imgix.net/a/g/hi/t/21c6ef0ba96e0ce5107a91c4506e2df7-statue-of-liberty.jpg",
    "trip_start": "1591747200",
    "trip_end": "1592179200"
  },
  {
    "id": 22,
    "start_time": null,
    "end_time": null,
    "itinerary_id": 3,
    "attraction_id": 17,
    "travel_mode": null,
    "name": "American Museum of Natural History",
    "description": null,
    "review": 5,
    "latitude": 40.7809345,
    "longitude": -73.9737497,
    "open_time": null,
    "close_time": null,
    "visit_duration": null,
    "photo": "https://d21xlh2maitm24.cloudfront.net/nyc/natural-history-museum.jpg?",
    "location": null,
    "submitted_by": null,
    "city": "New York City",
    "city_img": "https://lonelyplanetimages.imgix.net/a/g/hi/t/21c6ef0ba96e0ce5107a91c4506e2df7-statue-of-liberty.jpg",
    "trip_start": "1591747200",
    "trip_end": "1592179200"
  }
];


const transitTime = [[23, 34, 40, 15], [15]]; //total transit time between attractions as in minutes (will fetch from google direction API)
let itineraries = [];
let vectors = new Array();
for (let i = 0; i < data.length; i++) {
  vectors[i] = [data[i]['latitude'], data[i]['longitude']];
}

// calculate number of days for the trip
const getDays = (start, end) => {
  return Math.round((end - start) / 86400)
};

// K refers to number of days
const cluster = kmeans.clusterize(vectors, { k: getDays(data[0].trip_start, data[0].trip_end) }, (err, res) => {
  if (err) console.error(err);
  else {
    return res;
  }
});

//Loop through the result from kmeans function to get the array of attractions
cluster.groups.forEach(element => {
  for (let i in element.clusterInd) {
    element.clusterInd[i] = data[element.clusterInd[i]]
  }
  itineraries.push(element.clusterInd);
});


// calculate distance from point x to point y  - used for findNextDestination to compare distances
const getDistance = (x, y) => {
  let latDiff = x.latitude - y.latitude;
  let longDiff = x.longitude - y.longitude;
  return Math.sqrt(Math.pow(latDiff, 2) + Math.pow(longDiff, 2));
};

// find next closest destination - from "start" point, loop through all points available, and go to the nearest location point
const findNextDestination = (start, options) => {
  let distances = [];
  for (let i = 0; i < options.length; i++) {
    distances.push(getDistance(start, options[i]));
  }
  return options[distances.indexOf(Math.min(...distances))];
};

// get schedule for day (the order/sequence of destinations from morning to night) by picking one random "start point" and always going to closest attraction point
const getSchedule = (day) => {
  let schedule = [];
  schedule.push(day[0]);
  day.splice(0, 1);

  while (day.length > 0) {
    let nextDestination = findNextDestination(schedule[schedule.length - 1], day);
    schedule.push(nextDestination)
    day.splice(day.indexOf(nextDestination), 1)
  }

  return schedule;
}

// group clustered attractions in days
const getTimeForSchedule = (array) => {
  let dataset = []
  for (let i = 0; i < array.length; i++) {
    dataset.push(getSchedule(array[i]))
  }
  return dataset
}
const trip = getTimeForSchedule(itineraries);

// axios callback function for google direction api with travel_mode=driving
const axiosCallbackForCar = (origin, destination) => {
  return axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyDy_PU1wEoC3fNNYzMkjL4jyhVDlRKwdcA`)
    .then(response => {
      return { duration: response.data.routes[0].legs[0].duration.value, travel_mode: 'CAR' }
    })
    .catch(err => console.log(err));
}

// axios callback function for google direction api with travel_mode=transit
const axiosCallback = (origin, destination) => {
  return axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&mode=transit&key=AIzaSyDy_PU1wEoC3fNNYzMkjL4jyhVDlRKwdcA`)
    .then(response => {
      // check if api mode=transit not work
      if (response.data.routes[0] === undefined) {
        // remove mode, switch to default mode=driving api call instead
        return axiosCallbackForCar(origin, destination)
      } else {
        // check if there is more than one travel method for direction (Eg: walking -> bus -> walking)
        if (response.data.routes[0].legs[0].steps.length > 1) {
          return { duration: response.data.routes[0].legs[0].duration.value, travel_mode: 'TRANSIT' }
        } else {
          return { duration: response.data.routes[0].legs[0].duration.value, travel_mode: 'WALKING' }
        }
      }
    })
    .catch(err => console.log('Error for google direction api', err));
}

// nest loop to conditional making google api direction axios request call
const getTravelTime = async (array, axiosCallback) => {
  // loop day through trip array
  for (let i = 0; i < array.length; i++) {

    let counter = 0;

    // loop attraction obj in each day
    while (counter < array[i].length) {

      if (array[i][counter + 1]) {
        // check if current and next obj's travel_mode is null
        if (array[i][counter].travel_mode === null && array[i][counter + 1].travel_mode === null) {
          const origin = `${array[i][counter].latitude},${array[i][counter].longitude}`
          const destination = `${array[i][counter + 1].latitude},${array[i][counter + 1].longitude}`

          // api call to get the travel obj data between giving two locations
          const travelTime = await axiosCallback(origin, destination)

          // push in data with the travel obj data
          array[i].splice(counter + 1, 0, travelTime)

          counter += 2;
        } else {
          counter++;
        }
      } else {
        break;
      }
    }
  }
}
getTravelTime(trip, axiosCallback)

// function generate end_date: update start_time, end_time for attraction object and travel object
const end_data = () => {
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

        // update start_time for next item in the loop
        start_time = attraction.end_time
      }
      console.log(`Day ${Number(dayIndex) + 1}`, attraction)
    }
  }
}

setTimeout(end_data, 3000)