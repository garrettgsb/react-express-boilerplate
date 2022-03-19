const router = require("express").Router();

//all the clients routes comes here//

const clientRoutes = () => {
  
  router.get('/', (req, res) => {
    res.json({data: 'Hello from the Clients API!'});
  })

  return router;
};

module.exports = clientRoutes;