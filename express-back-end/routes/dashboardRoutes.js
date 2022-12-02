const Express = require('express');
const dashboardQueries = require('../db/queries/usersQueries');
const router = Express.Router();

// create the routes for the dashboard


router.get('/', (req,res) => {
  dashboardQueries.getUserWithEmail('god@amongmen.ca')
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      err.message;
    })
});

router.put('/', (req, res) => {
  console.log("details", req.body)
  dashboardQueries.updateUsers(req.body)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      err.message;
    })
});



module.exports = router;