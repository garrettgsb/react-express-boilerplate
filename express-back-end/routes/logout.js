// logout.js

const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

router.post("/", authorization, async (req, res) => {
  try {
    res.json("Logged out");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
