const Express = require('express');
const workoutLogQueries = require('../db/queries/workoutLogQueries');
const router = Express.Router();

// create the routes for the workout logs


router.get('/', (req,res) => {
  workoutLogQueries.getWorkOutLogsByUserId(1)
    .then(result => {
      console.log("Here",result);
      res.json(result);
    })
    .catch(err => {
      err.message;
    })
});

router.post('/', (req,res) => {
  workoutLogQueries.addWorkoutLogs(req.body)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      err.message;
    })
});



module.exports = router;