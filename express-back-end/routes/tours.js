const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.getTours()
      .then(tours => {
        res.json({ tours });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:tour_id", (req, res) => {
    db.getTour(req.params.tour_id)
      .then(tour => {
        res.json({ tour });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/city/:city", (req, res) => {
    db.getToursByCity(req.params.city)
      .then(tours => {
        res.json({ tours });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
