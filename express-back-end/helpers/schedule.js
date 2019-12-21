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
  }
];
 
let vectors = new Array();
for (let i = 0 ; i < data.length ; i++) {
  vectors[i] = [ data[i]['lat'] , data[i]['long']];
}

// K refers to number of days
kmeans.clusterize(vectors, {k: 2}, (err,res) => {
  if (err) console.error(err);
  else console.log('%o',res);
});
