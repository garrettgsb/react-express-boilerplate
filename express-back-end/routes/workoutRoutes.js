const Express = require("express");
const workoutQueries = require("../db/queries/workoutsQueries");
const exerciseQueries = require("../db/queries/exercisesQueries");
const router = Express.Router();

// create the routes for the workout used 1 as a demo to show the data that would be represented if a user was login

//CRUD REST API WORKOUTS ROUTES

// CREATE - post
router.post("/", (req, res) => {
  workoutQueries
    .addWorkouts(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      err.message;
    });
});

// Replace with route + query that accepts optional query params (see below)
// READ - get all
router.get("/", (req, res) => {
  workoutQueries
    .getWorkouts()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      err.message;
    });
});

// Refactor to use optional query parameters
// READ - get workout by id
router.get("/:id", (req, res) => {
  workoutQueries
    .getWorkoutById(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      err.message;
    });
});

// READ - get workouts by program id
router.get("/programs/:id", (req, res) => {
  const programId = req.params.id;
  workoutQueries
    .getWorkoutsByProgramId(programId)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      err.message;
    });
});

//UPDATE - put
router.put("/:id", (req, res) => {
  workoutQueries
    .updateWorkOuts(req.params.id, req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      err.message;
    });
});

//DELETE - delete
router.get("/:id", (req, res) => {
  workoutQueries
    .deleteWorkout(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      err.message;
    });
});

module.exports = router;
