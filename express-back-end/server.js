const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./db.js');
const db = new Pool(dbParams);
db.connect();


// Express Configuration
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(express.static('public'));
const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: ['polarBear', 'Hello']
}));

// Sample GET route
app.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

//Separated Routes for Each Resources
const usersRoutes = require('./routes/users');
const resourcesRoutes = require('./routes/resources');
const subjectsRoutes = require('./routes/subjects');
const progresstrackerRoutes = require('./routes/progresstracker');

//Mount all resource routes
app.use('/users', usersRoutes(db));
app.use('/resources', resourcesRoutes(db));
app.use('/subjects', subjectsRoutes(db));
app.use('/progresstracker', progresstrackerRoutes(db));