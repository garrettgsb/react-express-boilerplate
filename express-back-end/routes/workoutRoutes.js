const Express = require('express');
const workoutQueries = require('../db/queries/workoutsQueries');
const router = Express.Router();

// create the routes for the workout used 1 as a demo to show the data that would be represented if a user was login

//CRUD REST API WORKOUTS ROUTES

// CREATE - post
router.post('/', (req, res) => {
  workoutQueries.addWorkouts(req.body)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      err.message;
    })
});

// READ - get User workouts
router.get('/', (req, res) => {
  workoutQueries.getWorkoutByProgramId(1)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      err.message;
    })
});

// READ - get Individual
router.get('/:id', (req, res) => {
  workoutQueries.getWorkoutById(req.params.id)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      err.message;
    })
});

//UPDATE - put
router.put('/:id', (req, res) => {
  id = req.params.id
  info = req.body
  workoutQueries.updateWorkOuts(id, info)
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    err.message;
  })
});

//DELETE - delete
router.get('/:id', (req, res) => {
  workoutQueries.deleteWorkout(req.params.id)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      err.message;
    })
});

module.exports = router;