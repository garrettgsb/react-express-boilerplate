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

// Get a gas station price
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const gasStationPrice = await pool.query(
      "SELECT * FROM gas_station_price WHERE gas_station_price_id = $1",
      [id]
    );
    res.json(gasStationPrice.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Add a gas station price
router.post("/", authorization, async (req, res) => {
  try {
    const { gas_station_id, gas_type_id, price, date } = req.body;
    const newGasStationPrice = await pool.query(
      "INSERT INTO gas_station_price (gas_station_id, gas_type_id, price, date) VALUES ($1, $2, $3, $4) RETURNING *",
      [gas_station_id, gas_type_id, price, date]
    );
    res.json(newGasStationPrice.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Update a gas station price
router.put("/:id", authorization, async (req, res) => {
  try {
    const { id } = req.params;
    const { gas_station_id, gas_type_id, price, date } = req.body;
    const updateGasStationPrice = await pool.query(
      "UPDATE gas_station_price SET gas_station_id = $1, gas_type_id = $2, price = $3, date = $4 WHERE gas_station_price_id = $5",
      [gas_station_id, gas_type_id, price, date, id]
    );
    res.json("Gas station price was updated!");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Delete a gas station price
router.delete("/:id", authorization, async (req, res) => {
  try {
    const { id } = req.params;
    const deleteGasStationPrice = await pool.query(
      "DELETE FROM gas_station_price WHERE gas_station_price_id = $1",
      [id]
    );
    res.json("Gas station price was deleted!");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
