const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    db.query("SELECT * FROM users;").then((result) => {
      res.send(result.rows);
    });
  });

  router.get("/login/:email", (req, res) => {
    // console.log('req.params', req.params)
    req.session.email = req.params.id;
    res.send('logged in');
  });



  return router;
};
