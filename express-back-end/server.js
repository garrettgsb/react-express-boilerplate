// load .env data into process.env
require('dotenv').config();


// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const KEYS = process.env.KEYS ? [process.env.KEYS] : ['backup default key'];

const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');

// Queries
const userQueries = require('./lib/userQueries');
const tourQueries = require('./lib/tourQueries');
const bookingQueries = require('./lib/bookingQueries');
const notificationQueries = require('./lib/notificationQueries');
const mediaQueries = require('./lib/mediaQueries');

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(Express.static('public'));

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
