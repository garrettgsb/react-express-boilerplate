// favorites.js

const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

// Add a favorite gas station

router.post("/", authorization, async (req, res) => {
  try {
    const { user_id, gas_station_id } = req.body;
    const newFavorite = await pool.query(
      "INSERT INTO favorites (user_id, gas_station_id) VALUES ($1, $2) RETURNING *",
      [user_id, gas_station_id]
    );
    res.json(newFavorite.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get all favorite gas stations for a user

router.get("/:id", authorization, async (req, res) => {
  try {
    const { id } = req.params;
    const favorites = await pool.query(
      "SELECT * FROM favorites WHERE user_id = $1",
      [id]
    );
    res.json(favorites.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Delete a favorite gas station

router.delete("/:id", authorization, async (req, res) => {
  try {
    const { id } = req.params;
    const deleteFavorite = await pool.query(
      "DELETE FROM favorites WHERE favorite_id = $1",
      [id]
    );
    res.json("Favorite was deleted");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
