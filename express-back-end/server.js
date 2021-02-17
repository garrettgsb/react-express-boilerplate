const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const cookieSession = require("cookie-session");

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// cookies
App.use(cookieSession({
  name: "session",
  keys: ["user_id"]
}))

// seperated routes
const favourites = require("./routes/favourites");

// Resource route for favourites:
App.use("/favourites", favourites(db));

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

// An api endpoint that returns a short list of items
App.get('/api/getList', (req,res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log('Sent list of items');
});


App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
