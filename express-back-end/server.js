const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
// import moment from 'moment';
var moment = require('moment');


// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
const { Pool } = require('pg');
const dbParams = require('./db/lib/db.js')
const db = new Pool({
  user: 'labber',
  host: 'localhost',
  database: 'Bloom',
  password: 'labber',
  port: 5432,
});
db.connect();


// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

const getVeg = function() {
  return db.query(`SELECT * FROM vegetables`)
    .then(res => {
      // console.log(res.rows)
    }).catch(err => console.log(err));
};

// const tasks = function() {
//   return db.query(`SELECT * FROM vegetables`)
//   .then(res => {
//     // console.log(res.rows)
//   }).catch(err => console.log(err));
// }


// Grabs harvest dates. Calculates time till harvest.
const getHarvestDate = function() {
    return db.query(`SELECT planted_date, harvest_date FROM plots_vegs JOIN vegetables ON vegetables.id=vegetable_id`)
    .then(res => {
      // console.log(res.rows)

      // const planted = res.rows[0].planted_date
      // const harvest = res.rows[0].harvest_date

      // const harvest_date = moment(planted).add(harvest, 'days')
      // console.log(harvest_date)

      // const counter = moment(harvest_date).fromNow();   
      // console.log('counter', counter)
      return res.rows
    }).catch(err => console.log(err));
  }

  // getHarvestDate()

const harvest_date = function (planted, harvest) {
  const harvest_date = moment(planted).add(harvest, 'days')
  const counter = moment(harvest_date).fromNow();
  return counter;
}

// getHarvestDate().map(x => {
//   console.log(harvest_date(x.planted_date, x.harvest_date))
// })

const test = getHarvestDate().then(res => {
  res.map(x => {
    console.log(harvest_date(x.planted_date, x.harvest_date))
  })
})

// console.log(test)
