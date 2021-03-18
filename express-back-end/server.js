const Express = require('express');
require('dotenv').config();
const App = Express();
const path= require('path');

const PORT = 8080;

// Express Configuration
App.use(Express.urlencoded({ extended: false }));
App.use(Express.json());
App.use(Express.static('public'));




App.use(Express.static("public"));


const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();
const { getAllSpecies } = require("./db/dbhelpers.js")(db);



// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {

  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
