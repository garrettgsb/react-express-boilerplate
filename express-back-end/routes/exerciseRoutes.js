const Express = require("express");
const exerciseQueries = require("../db/queries/exercisesQueries");
const router = Express.Router();

// create the routes for the exercise used 1 as a demo to show the data that would be represented if a user was login

//CRUD REST API EXERCISES ROUTES

// CREATE - post
router.post("/", (req, res) => {
  exerciseQueries
    .addExercise(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      err.message;
    });
});

// READ - get all or by optional workoutId= query parameter
router.get("/", (req, res) => {
  exerciseQueries
    .getExercises(req.query)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      err.message;
    });
});

// READ - get exercise by id
router.get("/:id", (req, res) => {
  exerciseQueries
    .getExerciseById(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      err.message;
    });
});

// UPDATE - put
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const info = req.body;
  exerciseQueries
    .updateExercise(id, info)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      err.message;
    });
});

//DELETE - delete
router.delete("/:id", (req, res) => {
  exerciseQueries
    .deleteExercise(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      err.message;
    });
});

module.exports = router;
