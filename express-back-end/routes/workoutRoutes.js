const Express = require('express');
const workoutQueries = require('../db/queries/workoutsQueries');
const router = Express.Router();

// create the routes for the workout used 1 as a demo to show the data that would be represented if a user was login

router.get('/', (req, res) => {
  workoutQueries.getWorkoutByProgramId(1)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      err.message;
    })
});

module.exports = router;