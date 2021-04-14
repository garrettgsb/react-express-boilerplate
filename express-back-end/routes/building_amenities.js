const express = require("express");
const router = express.Router();

module.exports = (db) => {
  //Get all buildings in an area
  router.get("/:id/building_amenities", (req, res) => {
    // const buildingID = req.params.building_id;
    const buildingID = 6;

    db.query(
      `
      SELECT *
      FROM building_amenities
      WHERE building_id = $1
      `,
      [buildingID]
    )
      .then(({ rows: building_amenities }) => res.json(building_amenities))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
