const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./db');
const db = new Pool(dbParams);
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

//Separated Routes for Each Resources
const usersRoutes = require('./routes/users');
const homepageRoutes = require('./routes/homepage');
const categoriesRoutes = require('./routes/categories');

//Mount all resource routes
App.use('/home', homepageRoutes(db));
App.use('./users/', usersRoutes(db));
App.use('./categories/', categoriesRoutes(db));