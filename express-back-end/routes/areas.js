const express = require("express");
const router = express.Router();

module.exports = (db) => {
  //Get all areas
  router.get("/areas", (req, res) => {
    db.query(`SELECT * FROM areas`)
      .then(({ rows: areas }) => res.json(areas))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //Get a specific area
  router.get("/areas/:id", (req, res) => {
    const areaID = 1;

    db.query(
      `
      SELECT * 
      FROM areas
      WHERE id = $1
      `,
      [areaID]
    )
      .then(({ rows: area }) => res.json(area))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //route to get all buildings in an area
  router.get("/area/:areaId", (req, res) => {
    const areaName = req.body.name;
    console.log("area:", req.body);
    db.query(
      `
      SELECT * 
      FROM buildings
      WHERE neighbourhood = $1
      `,
      [areaName]
    )
      .then(({ rows: area }) => res.json(area))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
