const express = require('express');
const router = express.Router();
const db = require('../lib/db');

//this route needs some refreshing, the route needs to target the resources table to see if a user has favourited a resource (through favourited boolean) then also query then also use the favourites table to query the user_id to make sure its showing the right resources based off that user_id
router.get("/favourites/:userID", (req, res) => {
  return db.query(
    `SELECT * FROM resources JOIN favourites ON resources.id = resource_id WHERE favourites.user_id = $1`
  )
})



module.exports = router;