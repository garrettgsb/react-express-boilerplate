const Express = require('express');
const exerciseSelectionQueries = require('../db/queries/exerciseSelectionQueries');
const router = Express.Router();

// create the routes for the exercise used 1 as a demo to show the data that would be represented if a user was login

//CRUD REST API EXERCISES SELECTION ROUTES

// CREATE - post
router.post('/', (req, res) => {
  exerciseSelectionQueries.addExerciseSelection(req.body)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      err.message;
    })
});

// READ - get all by Workout 
router.get('/', (req, res) => {
  exerciseSelectionQueries.getExerciseSelectionByWorkoutId(1)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      err.message;
    })
});

// READ - get workout by id
router.get('/:id', (req, res) => {
  exerciseSelectionQueries.getExerciseSelectionById(req.params.id)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      err.message;
    })
});

// UPDATE - put
router.put('/:id', (req, res) => {
  id = req.params.id
  info =req.body
  exerciseSelectionQueries.updateExerciseSelection(id, info)
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    err.message;
  })
});


//DELETE - delete
router.delete('/:id', (req, res) => {
  exerciseSelectionQueries.deleteExerciseSelection(req.params.id)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      err.message;
    })
});

module.exports = router;