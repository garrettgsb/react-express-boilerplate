const router = require("express").Router();

// routes for specialties API //

const specialtiesRoutes = () => {
  router.get("/", (req, res) => {
    res.json({
      data: "Hello from the specialties API!",
    });
  });

  return router;
};

module.exports = specialtiesRoutes;
