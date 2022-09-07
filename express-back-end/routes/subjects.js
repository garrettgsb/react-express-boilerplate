const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/subjects", (req, res) => {
    db.query("SELECT * FROM subjects;").then((result) => {
      res.send(result.rows);
    });
  });

  return router;
};
