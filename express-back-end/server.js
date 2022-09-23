const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const pool = require("./db");
const bcrypt = require("bcryptjs");

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//routes
app.post("/login", async (req, res) => {
  const { email, pw } = req.body;
});

app.post("/register", async (req, res) => {
  try {
    const { email, pw } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (email, pw) VALUES($1, $2)",
      [email, pw]
    );
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(8080, () => {
  console.log("Server has started on port 8080");
});
