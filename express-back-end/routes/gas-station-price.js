// gas-station-price.js

const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

// Get all gas station prices
router.get("/", async (req, res) => {
  try {
    const gasStationPrices = await pool.query(
      "SELECT * FROM gas_station_price"
    );
    res.json(gasStationPrices.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;