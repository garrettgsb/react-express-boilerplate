require('dotenv').config()
const Express = require('express');
const app = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const moment = require('moment');
const db = require('./db/lib/db')
const maintenenceRoutes = require('./routes/maintenance')
const vegetableRoutes = require('./routes/vegetables')

// Express Configuration
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(Express.static('public'));


// Sample GET route
// app.get('/api/users', (req, res) => {
//   getUsers().then(data =>{
//     res.json(data)
//   })
// }); 
// app.get('/api/plots', (req, res) => {
//   getPlots().then(data =>{
//     res.json(data)
//   })
// }); 
// app.get('/api/vegetables', (req, res) => {
//   getVeg().then(data =>{
//     res.json(data)
//   })
// }); 

app.use(maintenenceRoutes)
app.use(vegetableRoutes)

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

// const getVeg = function() {
//   return db.query(`SELECT * FROM vegetables`)
//     .then(res => {
//       return res.rows
//     }).catch(err => console.log(err));
// };

// const getUsers = function() {
//   return db.query(`SELECT * FROM users `)
//     .then(res => {
//       return res.rows
//     }).catch(err => console.log(err));
// };

const getPlots = function() {
  return db.query(`SELECT * FROM plots `)
    .then(res => {
      return res.rows
    }).catch(err => console.log(err));
};
// const tasks = function() {
//   return db.query(`SELECT * FROM vegetables`)
//   .then(res => {
//     // console.log(res.rows)
//   }).catch(err => console.log(err));
// }


// Grabs harvest dates. Calculates time till harvest.
// const getHarvestDate = function() {
//     return db.query(`SELECT planted_date, harvest_date FROM plots_vegs JOIN vegetables ON vegetables.id=vegetable_id`)
//     .then(res => {
//       // console.log(res.rows)

//       // const planted = res.rows[0].planted_date
//       // const harvest = res.rows[0].harvest_date

//       // const harvest_date = moment(planted).add(harvest, 'days')
//       // console.log(harvest_date)

//       // const counter = moment(harvest_date).fromNow();   
//       // console.log('counter', counter)
//       return res.rows
//     }).catch(err => console.log(err));
//   }

  // getHarvestDate()

// const harvest_date = function (planted, harvest) {
//   const harvest_date = moment(planted).add(harvest, 'days')
//   const counter = moment(harvest_date).fromNow();
//   return counter;
// }

// getHarvestDate().map(x => {
//   console.log(harvest_date(x.planted_date, x.harvest_date))
// })

// const test = getHarvestDate().then(res => {
//   res.map(x => {
//     console.log(harvest_date(x.planted_date, x.harvest_date))
//   })
// })

// console.log(test)


