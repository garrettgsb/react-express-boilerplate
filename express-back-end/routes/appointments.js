const router = require("express").Router();

//all the appointment routes come here//

const appointmentRoutes = () => {
  router.get("/", (req, res) => {
    res.json({
      data: "Hello from the appointments API!",
    });
  });

  return router;
};

module.exports = appointmentRoutes;
