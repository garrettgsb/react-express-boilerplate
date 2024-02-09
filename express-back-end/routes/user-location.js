// user-location.js
const router = require("express").Router();
const db = require('../src/db/connection');

// Handle user location data
router.post("/", async (req, res) => {
  try {
    const { latitude, longitude } = req.body;



    res.status(200).json({ message: 'User location received successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;