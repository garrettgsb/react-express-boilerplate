const router = require("express").Router();

module.exports = (db) => {
  //Access login page
  router.get("/users", (req, res) => {});

  //Favourite a building
  router.post("/users/:id/favourites", (req, res) => {
    const userID = req.params.id;
    const buildingID = req.body.id;
    db.query(
      `
      INSERT into favourites (user_id, map_id) VALUES ($1, $2)
      RETURNING *
      `,
      [userID, buildingID]
    )
      .then((favourite) => res.json(favourite))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
};
