const router = require("express").Router();

//get all buildings in an area
module.exports = (db) => {
  router.get("/buildings", (req, res) => {
    const areaID = req.params.area_id;
    db.query(
      `
      SELECT *
      FROM points
      WHERE area_id = $1
      `,
      [areaID]
    )
      .then((buildings) => res.json(buildings))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
};
