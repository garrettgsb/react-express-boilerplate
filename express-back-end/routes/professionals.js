const router = require("express").Router();

// routes for professionals API //

const professionalRoutes = () => {

  router.get('/', (req, res) => {
    res.json({data: 'Hello from the Professionals API!'})
  })

  return router;
};

module.exports = professionalRoutes;