const router = require("express").Router();

module.exports = (db) => {
  // Access user profile
  router.get("/:id", (req, res) => {
    // const userID = req.params.id;
    const userID = 4;
    db.query(
      `
      SELECT *
      FROM users
      WHERE id = $1
      `,
      [userID]
    )
      .then(({ rows: user }) => res.json(user))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //Access users favourites
  router.get("/:id/favourites", (req, res) => {
    // const userID = req.params.id;
    const userID = 4;
    db.query(
      `
      SELECT * FROM favourites
      JOIN buildings ON building_id = buildings.id
      WHERE user_id = $1
      `,
      [userID]
    )
      .then(({ rows: favourites }) => res.json(favourites))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //Favourite a building
  router.post("/:id/favourites", (req, res) => {
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
  router.delete("/:id/favourites/:id", (req, res) => {
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
        res.status(204).json({ error: err.message });
      });
  });
  return router;
};
