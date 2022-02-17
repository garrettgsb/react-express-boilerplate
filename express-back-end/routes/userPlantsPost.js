const express = require("express");
const db = require('./index');
const router = express.Router();


router.post("/", (req, res) => {
  // eslint-disable-next-line camelcase
  const { species_id, user_id, nickname, location, } = req.body;
  db.query(
    `
      INSERT INTO user_plants (species_id, user_id, nickname, location, ) VALUES ($1, $2, $3, $4) RETURNING *;
    `,
    // eslint-disable-next-line camelcase
    [species_id, user_id, nickname, location,]
  )
    .then(({ rows: userPlants }) => {
      res.json(userPlants);
    })
    .catch((error) => console.log(error));
});

module.exports = router;