const express = require("express");
const router = express.Router();

module.exports = (db) => {
  //Get all buildings in an area
  router.get("/buildings", (req, res) => {
    // const areaID = req.params.area_id;
    const areaID = 1;

    db.query(
      `
      SELECT *
      FROM buildings
      WHERE area_id = $1
      LIMIT 100
      `,
      [areaID]
    )
      .then(({ rows: buildings }) => res.json(buildings))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //Get a specific building
  router.get("/buildings/:id", (req, res) => {
    const buildingID = req.params.id;

    db.query(
      `
      SELECT * 
      FROM buildings
      WHERE id = $1
      `,
      [buildingID]
    )
      .then(({ rows: building }) => res.json(building))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
