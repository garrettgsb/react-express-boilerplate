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
console.log(itineraries)


// for (let itinerary of itineraries) {
//   for (let attraction of itinerary) {
//   }
// }
