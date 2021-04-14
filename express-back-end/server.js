const Express = require("express");
require("dotenv").config();
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;
const ENV = process.env.ENV || "development";
const CORS = require("cors");

// const db = require("./db");
// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));
App.use(CORS());

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

const reviewsRoutes = require("./routes/reviews");
const buildings = require("./routes/buildings");
const areas = require("./routes/areas");
const amenities = require("./routes/amenities");
const buildingAmenities = require("./routes/building_amenities");
const users = require("./routes/users");

App.use("/", reviewsRoutes(db));
App.use("/api", buildings(db));
App.use("/api", areas(db));
App.use("/api", amenities(db));
App.use("/api", buildingAmenities(db));
App.use("/api/users", users(db));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
