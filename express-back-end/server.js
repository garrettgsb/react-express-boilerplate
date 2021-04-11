const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 9000;

// PG database client/connection setup
// const { Pool } = require('pg');
// const dbParams = require('./db/db.js');
// const db = new Pool(dbParams);
// db.connect();

const { Pool }= require('pg');

const db = new Pool ({
  user: 'monke',
  password: 'monke',
  host: 'localhost',
  database: 'trendi'
});

db.connect();

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
