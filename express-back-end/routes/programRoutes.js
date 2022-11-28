const Express = require('express');
const programQueries = require('../db/queries/programsQueries');
const router = Express.Router();

// create the routes for the programs used 1 as a demo to show the data that would be represented if a user was login

// to /program/
router.get('/', (req, res) => {
  programQueries.getProgramWithUserId(1)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      err.message;
    })
});

module.exports = router;