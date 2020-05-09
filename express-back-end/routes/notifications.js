const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/:notification_id", (req, res) => {
    db.getNotification(req.params.notification_id)
      .then(notification => {
        res.json({ notification });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/user/:user_id", (req, res) => {
    db.getNotificationByUser(req.params.user_id)
      .then(notifications => {
        res.json({ notifications });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
