const Express = require('express');
const router  = Express.Router();
const db = require('../db/lib/db');


  router.get('/api/users', (req, res) => {
    getUsers().then(data =>{
      res.json(data)
    })
  }); 
  
  router.get('/api/vegetables', (req, res) => {
    getVeg().then(data =>{
      res.json(data)
    })
  }); 



  //helper to select all veg
  const getVeg = () => db.query(`SELECT * FROM vegetables`)
  .then(res => {
    return res.rows
  }).catch(err => console.log(err));

  //helper to select all users
  const getUsers = () => db.query(`SELECT * FROM users`)
  .then(res => {
    return res.rows
  }).catch(err => console.log(err));

// get planted veggies per plot.
const getPlantedVeg = function() {
  return db.query(`SELECT * FROM vegetables JOIN plots_vegs ON vegetables.id=plots_vegs.vegetable_id`)
  .then(res => {
    return res.rows
  })
  .catch(err => console.log(err));
}
  

module.exports = router;