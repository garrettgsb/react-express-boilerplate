const router = require("express").Router();

module.exports = (db) => {
  // Access user profile
  router.get("/:id", (req, res) => {
    // const userID = req.params.id;
    const userID = 1;
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
    const userID = 1;
    db.query(
      `
      SELECT f.id, f.building_id, f.user_id, b.name, b.image_url, b.address FROM favourites f 
      JOIN buildings b ON f.building_id = b.id 
      WHERE user_id = $1
      `,
      [userID]
    )
      .then((favourites) => {
        res.json(favourites.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //Favourite a building
  router.post("/:id/favourites/:buildingId", (req, res) => {
    const userId = 1;
    const buildingId = req.body.id;
    db.query(
      `
      INSERT into favourites (user_id, building_id) VALUES ($1, $2)
      RETURNING *
      `,
      [userId, buildingId]
    )
      .then((favourite) => res.json(favourite))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //Delete a favourite
  router.delete("/:id/favourites/:favouriteId", (req, res) => {
    const favouriteId = req.params.id;

    db.query(
      `
      DELETE FROM favourites
      WHERE id = $1
      `,
      [favouriteId]
    )
      .then(() => res.send("Deleted from favourites"))
      .catch((err) => {
        res.status(204).json({ error: err.message });
      });
  });
  return router;
};
