const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "session",
    keys: ["secretKey"],
  })
);
//routes
app.post("/login", async (req, res) => {
  const { email, pw } = req.body;
  const query = {
    name: "fetch-user",
    text: "SELECT * FROM users WHERE email = $1 and pw = $2",
    values: [email, pw],
  };
  pool.query(query, (error, response) => {
    if (!response.rows[0]) {
      console.log("Invalid credentials");
    } else {
      console.log("Succesful.");
      req.session.userId = response.rows[0].userid;
    }
  });
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
