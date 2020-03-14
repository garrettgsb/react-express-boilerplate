const express = require('express')
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM ratings;`)
      .then(data => {
        const ratings = data.rows;
        res.json({ ratings });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
