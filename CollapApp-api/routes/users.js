const router = require("express").Router();
const db = require('../config/database')
const User = require('../models/User')

//get user list
router.get('/', (req, res) =>
User.findAll()
  .then(users => {
    console.log(users);
    res.sendStatus(200);
  })
  .catch(err => console.log("Error:"+ err)));

module.exports = router;