const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/progress", (req, res) => {
    db.query("SELECT * FROM progress_tracker").then((results) => {
      res.send(results.rows);
    });
  });

  router.post("/progress", (req, res) => {
    const params = [req.body['steps_complete']];

    db.query(`UPDATE progress_tracker
    SET steps_complete = $1`, params)
    .then((data) => {

    })
    .catch(error => res.status(500).json({error: error.message}));
  })

  return router;
};
