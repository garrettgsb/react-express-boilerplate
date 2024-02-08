// users.js
//note to self: check back on this later

const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");

// Get all users

router.get("/", async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM users");
    res.json(users.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// add a user to the database

router.post("/", async (req, res) => {
  try {
    const { user_name, user_email, user_password } = req.body;

    const user = await pool.query(
      "SELECT * FROM users WHERE user_email = $1",
      [user_email]
    );

    if (user.rows.length !== 0) {
      return res.status(401).send("User already exists");
    } else {
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);
      const bcryptPassword = await bcrypt.hash(user_password, salt); // hash the password

      const newUser = await pool.query(
        "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
        [user_name, user_email, bcryptPassword]
      ); // insert the new user into the database

      res.json(newUser.rows[0]);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get a user

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query(
      "SELECT * FROM users WHERE user_id = $1",
      [id]
    ); // insert the new user into the database

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
