// gas-stations.js

const router = require("express").Router();
const db = require('../connection');

// Get all gas stations
router.get("/", async (req, res) => {
  try {
      const query = `
          SELECT
              gs.name,
              gs.vicinity,
              gs.payment_method,
              gs.fuel_type,
              l.lat,
              l.lng,
              gp.regular_price,
              gp.premium_price,
              gp.diesel_price,
              r.rating
          FROM gas_stations gs
          JOIN locations l ON gs.id = l.gas_station_id
          JOIN gas_prices gp ON gs.id = gp.gas_station_id
          LEFT JOIN reviews r ON gs.id = r.gas_station_id;
      `;
      const gasStations = await db.query(query);
      res.json(gasStations.rows);
  } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
  }
});




module.exports = router;
