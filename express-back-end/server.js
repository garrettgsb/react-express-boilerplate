const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./db.js');
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
const resourcesRoutes = require('./routes/resources');
const subjectsRoutes = require('./routes/subjects');

//Mount all resource routes
App.use('/', usersRoutes(db));
App.use('/', resourcesRoutes(db));
App.use('/', subjectsRoutes(db));