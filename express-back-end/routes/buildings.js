const express = require("express");
const router = express.Router();

module.exports = (db) => {
  //Get all buildings in an area
  const userId = 1;

  router.get("/", (req, res) => {
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
  router.get("/:id", (req, res) => {
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

  //add or delete a favourite
  router.post("/favourite/:buildingId", (req, res) => {
    const buildingId = req.params.buildingId;

    db.query(
      `
      SELECT * 
      FROM favourites
      WHERE building_id = $1 AND user_id = $2
      `,
      [buildingId, userId]
    ).then(({ rows: building }) => {
      //query to delete favourite
      if (building.length > 0) {
        db.query(
          `
            DELETE FROM favourites
            WHERE building_id = $1 AND user_id = $2
            `,
          [buildingId, userId]
        )
          .then(() => res.send("Deleted from favourites"))
          .catch((err) => {
            res.status(204).json({ error: err.message });
            return;
          });
      } else {
        //query to add a favourite
        db.query(
          `
            INSERT into favourites (user_id, building_id) VALUES ($1, $2)
            RETURNING *
            `,
          [userId, buildingId]
        )
          .then((result) => res.send("Favourite Added"))
          .catch((err) => {
            res.status(500).json({ error: err.message });
          });
      }
    });
  });
  return router;
};
