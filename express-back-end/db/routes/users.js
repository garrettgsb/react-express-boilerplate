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
      INSERT into favourites (user_id, building_id) VALUES ($1, $2)
      RETURNING *
      `,
      [userID, buildingID]
    )
      .then((favourite) => res.json(favourite))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //Delete a favourite
  router.put("/users/:id/favourites/:id", (req, res) => {
    const favouriteID = req.params.id;
    db.query(
      `
      DELETE FROM favourites
      WHERE id = $1
      `,
      [favouriteID]
    )
      .then(() => res.send("Deleted from favourites"))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
};
