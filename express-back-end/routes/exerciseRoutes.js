const Express = require('express');
const exerciseSelectionQueries = require('../db/queries/exerciseSelectionQueries');
const exerciseQueries = require('../db/queries/exercisesQueries');
const router = Express.Router();

// create the routes for the exercise used 1 as a demo to show the data that would be represented if a user was login

router.get('/', (req, res) => {
  exerciseSelectionQueries.getExerciseSelectionById(1)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      err.message;
    })
});

// to /program/workouts/exercises/:id
router.get('/exercise/:id', (req, res) => {
  exerciseQueries.getExerciseId(1)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      err.message;
    })
});


module.exports = router;