const express = require("express");
const router = express.Router();




module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query("SELECT * FROM users;").then((result) => {
      res.send(result.rows);
    });
  });

  router.get("/login/:id", (req, res) => {
    req.session.id = req.params.id;
    res.redirect('/');
  });
  return router;
};
