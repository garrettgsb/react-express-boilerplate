const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/resources", (req, res) => {
    db.query("SELECT * FROM resources;").then((result) => {
      res.send(result.rows);
    });
  });

  return router;
};
