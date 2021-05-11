const Express = require('express');
const router  = Express.Router();
const db = require('../db/lib/db');


//could clean up later to have all in one get. 
  router.get('/api/plots', (req, res) => {
    getPlots().then(data =>{
      console.log('data',data)
      res.json(data)
    })
  }); 
  
  const getPlots = function() {
    return db.query(`SELECT * FROM plots `)
      .then(res => {
        console.log(res.rows)
      }).catch(err => console.log(err));
  };  

  router.get('/api/:plotId', (req, res) => {
    getPlantedVeg().then(data =>{
      res.json(data)
    })
  }); 



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