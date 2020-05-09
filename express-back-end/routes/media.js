const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/:media_id", (req, res) => {
    db.getMedia(req.params.notification_id)
      .then(media => {
        res.json({ media });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/tour/:tour_id", (req, res) => {
    db.getMediaByTour(req.params.tour_id)
      .then(media => {
        res.json({ media });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
