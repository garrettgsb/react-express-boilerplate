require("dotenv").config();

const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;

const db = require("./db");
const buildings = require("./routes/buildings");
// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

App.use("/api", buildings(db));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
