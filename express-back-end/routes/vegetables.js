const Express = require('express');
const router = Express.Router();
const db = require('../db/lib/db');


router.get('/api/users', (req, res) => {
  getUsers().then(data => {
    res.json(data)
  })
});

router.get('/api/vegetables', (req, res) => {
  getVeg().then(data => {
    res.json(data)
  })
});



//helper to select all veg
const getVeg = () => db.query(`SELECT * FROM vegetables ORDER BY name`)
  .then(res => {
    return res.rows
  }).catch(err => console.log(err));

//helper to select all users
const getUsers = () => db.query(`SELECT * FROM users`)
  .then(res => {
    return res.rows
  }).catch(err => console.log(err));




module.exports = router;