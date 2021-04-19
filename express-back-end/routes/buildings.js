const express = require("express");
const router = express.Router();

module.exports = (db) => {
  //Get all buildings
  const userId = 1;

  router.get("/", (req, res) => {
    db.query(
      `
      SELECT *
      FROM buildings
      LIMIT 500
      `
    )
      .then(({ rows: buildings }) => res.json(buildings))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // Gets a specific building's details
  router.get("/:id", (req, res) => {
    const buildingID = req.params.id;

    db.query(
      `
      SELECT buildings.id AS building_id, buildings.area_id AS area_id, buildings.name AS name, buildings.address AS building_address, buildings.neighbourhood AS neighbourhood, buildings.image_url AS image_url, buildings.longitude AS longitude, buildings.latitude AS latitude,
      (SELECT ROUND(AVG(building_rating),0)::INTEGER 
      AS average_building_rating FROM reviews where building_id = $1),
      ROUND((SELECT ((SELECT cast(count(id) as decimal) FROM reviews WHERE landlord_rating = 'true' and building_id=$1) / (SELECT cast(COUNT(id) as decimal) FROM reviews where building_id = $1))*100),0)
      AS landlord_ratio, 
      ROUND((SELECT ((SELECT cast(count(id) as decimal) FROM reviews WHERE recommend_to_friend = 'true' and building_id=$1) / (SELECT cast(COUNT(id) as decimal) FROM reviews where building_id = $1))*100),0)
      AS recommend_to_friend_ratio
      FROM buildings
      WHERE buildings.id = $1;
      `,
      [buildingID]
    )
      .then(({ rows: building }) => res.json(building))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // Get buildings based off of rating
  router.get("/ratings/:ratingId", (req, res) => {
    const ratingId = req.params.ratingId;

    db.query(
      `
      SELECT b.id, b.name, b.address, b.neighbourhood, b.image_url, b.latitude, b.longitude, COUNT(r.building_id), r.building_rating
      FROM buildings b
      JOIN reviews r ON r.building_id = b.id
      WHERE r.building_rating = $1
      GROUP BY b.id, b.name, b.address, b.neighbourhood, b.image_url, r.building_rating
      HAVING COUNT(building_id) = 1
      `,
      [ratingId]
    )
      .then(({ rows: buildings }) => res.json(buildings))
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
