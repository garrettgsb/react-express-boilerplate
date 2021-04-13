const Express = require('express');
require("dotenv").config();
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;
const ENV = process.env.ENV || "development";
const CORS =  require('cors');

const db = require("./db");
const buildings = require("./routes/buildings");
// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
App.use(CORS());

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

App.use("/api", buildings(db));

const reviewsRoutes = require("./routes/reviews");
App.use("/", reviewsRoutes(db))

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
