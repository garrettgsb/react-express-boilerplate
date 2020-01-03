const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  // res.send("Home Page");
  // check if user login in
  // else redirect to login in
  res.redirect("/login");
});

routes.get("/signup", (req, res) => {
  res.send("SignUp Page");
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

module.exports = routes;