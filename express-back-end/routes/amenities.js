const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  //Get all amenities in an area
  router.get("/amenities", (req, res) => {
    // const areaID = req.params.area_id;
    const areaID = 1;

    db.query(
      `
      SELECT *
      FROM amenities
      WHERE area_id = $1
      `,
      [areaID]
    )
      .then(({ rows: amenities }) => res.json(amenities))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //Get a specific amenity
  router.get("/amenities/:id", (req, res) => {
    const amenityID = req.params.id;

    db.query(
      `
      SELECT * 
      FROM amenities
      WHERE id = $1
      `,
      [amenityID]
    )
      .then(({ rows: amenity }) => res.json(amenity))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
