const express = require('express');
const router  = express.Router();
const { insertUserPlant } = require('../db/user-plant-queries');

router.post("/", (req, res) => {
  console.log("insert user plant", insertUserPlant);
  insertUserPlant(req.body)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => console.log(error));
});

module.exports = router;