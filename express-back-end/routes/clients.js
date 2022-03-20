const router = require("express").Router();
//

//all the clients routes come  here//
//api/clients
const clientRoutes = () => {
  // get the all clients

  router.get("/", (req, res) => {
    res.json({
      data: "Hello from the clients API!",
    });
  });

  return router;
};

module.exports = clientRoutes;
