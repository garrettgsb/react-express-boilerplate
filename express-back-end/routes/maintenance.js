const Express = require('express');
const router = Express.Router();
const db = require('../db/lib/db');


//could clean up later to have all in one get. 
router.get('/api/plots', (req, res) => {
  getPlots().then(data => {
    res.json(data)
  })
});

const getPlots = function () {
  return db.query(`SELECT * FROM plots`)
    .then(res => {
      return res.rows
    }).catch(err => console.log(err));
};

// router.get('/api/plot/:plotId', (req, res) => {
//   getPlantedVeg().then(data => {
//     res.json(data)
//   })
// });

router.get('/api/plots_vegs', (req, res) => {
  getPlantedVeg().then(data => {
    res.json(data)
  })
});

// get plots_vegs table.
const getPlotsVegs = function () {
  return db.query(`SELECT * FROM plots_vegs`)
    .then(res => {
      return res.rows
    })
    .catch(err => console.log(err));
}

// get planted veggies per plot.
const getPlantedVeg = function () {
  return db.query(`SELECT * FROM vegetables JOIN plots_vegs ON vegetables.id=plots_vegs.vegetable_id WHERE user_id=1`)
    .then(res => {
      return res.rows
    })
    .catch(err => console.log(err));
}



// get tasks per plots_vegs.
// const getPlotTasks = function() {
//   return db.query(`SELECT name, image_url, water_time FROM vegetables JOIN plots_vegs ON vegetables.id=plots_vegs.vegetable_id`)
//   .then(res => {
//     return res.rows
//   })
//   .catch(err => console.log(err));
// }

// router.get('/api/:plotId', (req, res) => {
//   getPlantedVeg().then(data =>{
//     res.json(data)
//   })
// }); 


module.exports = router;