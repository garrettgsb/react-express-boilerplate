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

  router.post("/favourite/:buildingId", (req, res) => {
    const buildingId = req.params.buildingId;
    const body = req.body;
    console.log("buildingId!!!!:", buildingId, "==", userId);

    db.query(
      `
      SELECT * 
      FROM favourites
      WHERE building_id = $1 AND user_id = $2
      `,
      [buildingId, userId]
    )
      .then(({ rows: building }) => {
        if (building.length > 0) {
          console.log("building @#$@#$@#$@:", building);
          // unLikeBuilding(buildingId, userId);
          db.query(
            `
            DELETE FROM favourites
            WHERE building_id = $1 AND user_id = $2
            `,
            [buildingId, userId]
          )
            .then(() => res.send("Favourite Removed"))
            .catch((err) => {
              return err.message;
              // res.status(204).json({ error: err.message });
            });
        } else {
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
        return res.send(building);
      })
      .catch((err) => {
        console.log("err: @#$@#$@#", err);
        res.status(500).json({ error: err.message });
      });

    // db.query(
    //   `
    //   INSERT into favourites (user_id, building_id) VALUES ($1, $2)
    //   RETURNING *
    //   `,
    //   [userId, buildingId]
    // )
    //   .then((favourite) => res.json(favourite))
    //   .catch((err) => {
    //     res.status(500).json({ error: err.message });
    //   });
  });

  router.delete("/favourite/:buildingId", (req, res) => {
    const buildingId = req.params.buildingId;
    const body = req.body;
    console.log("body:", body);

    db.query(
      `
      DELETE FROM favourites
      WHERE building_id = $1 && user_id = $2
      `,
      [buildingId, userId]
    )
      .then(() => res.send("Deleted from favourites"))
      .catch((err) => {
        res.status(204).json({ error: err.message });
      });
  });

  const likeBuilding = async (userId, buildingId) => {
    db.query(
      `
      INSERT into favourites (user_id, building_id) VALUES ($1, $2)
      RETURNING *
      `,
      [userId, buildingId]
    )
      .then((result) => true)
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  };

  const unLikeBuilding = (userId, buildingId) => {
    db.query(
      `
      DELETE FROM favourites
      WHERE building_id = $1 && user_id = $2
      `,
      [buildingId, userId]
    )
      .then(() => true)
      .catch((err) => {
        return err.message;
        // res.status(204).json({ error: err.message });
      });
  };

  return router;
};
