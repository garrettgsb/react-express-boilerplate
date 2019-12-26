const kmeans = require('node-kmeans');

// sample data
const data = [
  { name: "Stanley Park",
    lat: 49.302488447038236,
    long: -123.14171791076662
  },
  { name: "Coal Harbour",
    lat: 49.291304,
    long: -123.123276
  },
  { name: "Cypress",
    lat: 49.352945607771844,
    long: -123.17801846257264
  },
  { name: "Third Beach",
    lat: 49.30338193650776,
    long: -123.1563403102008
  },
  { name: "False Creek Seawall",
    lat: 49.27273179887483,
    long: -123.13379848089629
  },
  { name: "Earnest Ice Cream",
    lat: 49.26896525441082,
    long: -123.10261255924644
  },
  { name: "David Lam Park",
    lat: 49.2724665529135,
    long: -123.12386556302295
  }
];

const days = [1, 2];

const transitTime =  [[23, 34, 40, 15], [15]]; //total transit time between attractions as in minutes (will fetch from google direction API)
let itineraries = [];
let vectors = new Array();
for (let i = 0 ; i < data.length ; i++) {
  vectors[i] = [ data[i]['lat'] , data[i]['long']];
}

// K refers to number of days
const cluster = kmeans.clusterize(vectors, {k: days.length}, (err,res) => {
  if (err) console.error(err);
  else {
    // console.log('%o',res);
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
// console.log('itineraries', itineraries)

// for (let itinerary of itineraries) {
//   for (let attraction of itinerary) {
//   }
// }

// calculate distance from point x to point y  - used for findNextDestination to compare distances
const getDistance = (x, y) => {
  let latDiff = x.lat - y.lat;
  let longDiff = x.long - y.long;
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
    let nextDestination = findNextDestination(schedule[schedule.length-1], day);
    schedule.push(nextDestination)
    day.splice(day.indexOf(nextDestination), 1)
  }
  
  return schedule;
}

console.log('FIRST DAY', getSchedule(itineraries[0]))
console.log('SECOND DAY', getSchedule(itineraries[1]))