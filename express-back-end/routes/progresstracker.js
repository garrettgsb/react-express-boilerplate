const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/progress", (req, res) => {
    db.query("SELECT * FROM progress_tracker").then((results) => {
      res.send(results.rows);
    });
  });

  router.post("/progress", (req, res) => {

    const userId = 2;
    const resourceId = req.body.resource_id;

    db.query(`
    INSERT INTO progress_tracker (users_id, resources_id)
    VALUES ($1, $2)
    `, [userId, resourceId])
    .then((data) => {
      res.status(200);
    });

    db.query(`
    SELECT COUNT(resources_id) FROM progress_tracker;
    `)
    .then((data) => {
      console.log("data.rows", data.rows)
      res.send(data.rows);
    });
  })

  return router;
};
