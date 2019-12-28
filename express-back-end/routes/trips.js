const router = require("express").Router();

module.exports = (db) => {
  router.get('/trips', (req, res) => {
    db.query(
      `
      SELECT * FROM itineraries;
      `
    )
    .then((rows) => {
      res.json(rows);
    })
  })
  return router;
}