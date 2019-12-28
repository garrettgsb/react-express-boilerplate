const express = require("express");
const routes = express.Router();
const bcrypt = require('bcrypt');
const database = require("./database");

routes.get("/", (req, res) => {
  // res.send("Home Page");
  // check if user login in
  // else redirect to login in
  res.redirect("/login");
});

routes.get("/login", (req, res) => {
  res.send("Login Page");
});

routes.get("/signup", (req, res) => {
  res.send("SignUp Page");
});

routes.get("/profile", (req, res) => {
  res.send("Profile Page");
});

routes.get("/explore", (req, res) => {
  res.send("Explore Page");
});

routes.get("/explore/:city", (req, res) => {
  res.send(`${req.params.city} Page`);
});

routes.get("/trips", (req, res) => {
  res.send("Trips Page");
});

routes.get("/trip/:id", (req, res) => {
  res.send(`Itinerary ${req.params.id}`);
});

routes.get("/trip/:id/attractions", (req, res) => {
  res.send(`Itinerary ${req.params.id} attractions Page`);
});

routes.post("/login", (req, res) => {
  // check if use exist with given username and password
  const login = function (email, password) {
    return database.getUserWithEmail(email)
      .then(user => {
        if (bcrypt.compareSync(password, user.password)) {
          return user;
        }
        return null;
      });
  }
  const { email, password } = req.body;
  login(email, password)
    .then(user => {
      if (!user) {
        res.send({ error: "error" })
      }
      req.session.userId = user.id;
      res.send({
        user: {
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          id: user.id
        }
      });
    })
    .catch(err => console.log(err));
});

module.exports = routes;