require("dotenv").config();
const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// Import db
const database = require("./lib/db");
const { db, testFunction } = database;

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

// Sample GET route
App.get('/test', (req, res) =>  {
  testFunction();
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
