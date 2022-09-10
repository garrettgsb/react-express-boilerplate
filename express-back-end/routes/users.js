const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    db.query("SELECT * FROM users;").then((result) => {
      res.send(result.rows);
    });
  });

  router.get("/login/:email", (req, res) => {
    db.query('SELECT * FROM users WHERE email=$1;', [req.params.email]).then((result) => {
      req.session.email = req.params.id;
      res.send(result.rows);
    });
  });



  return router;
};
