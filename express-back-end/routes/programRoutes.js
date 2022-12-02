const Express = require('express');
const programQueries = require('../db/queries/programsQueries');
const router = Express.Router();

// create the routes for the programs used 1 as a demo to show the data that would be represented if a user was login

//CRUD REST API PROGRAM ROUTES

// CREATE - post
router.post('/', (req, res) => {
  programQueries.addPrograms(req.body)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      err.message;
    })
});

// READ - get all by user
router.get('/', (req, res) => {
  programQueries.getProgramWithUserId(1)
    .then(programs => {
      res.json({programs});
    })
    .catch(err => {
      err.message;
    })
});

// READ - get by 
router.get('/:id', (req, res) => {
  programQueries.getProgramWithId(req.params.id)
    .then(program => {
      res.json({program});
    })
    .catch(err => {
      err.message;
    })
});

//UPDATE - put
router.put('/:id', (req, res) => {
  id = req.params.id
  updates = req.body
  programQueries.updateProgram(id, updates)
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    err.message;
  })
});


//DELETE - delete
router.delete('/:id', (req, res) => {
  programQueries.deleteProgram(req.params.id)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      err.message;
    })
});


module.exports = router;