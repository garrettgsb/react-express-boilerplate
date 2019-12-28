const router = require("express").Router();

module.exports = (db) => {
  router.get('/api/trips', (req, res) => {
    db.query(
      `
      SELECT * FROM itineraries;
      `
    )
    .then((response) => {
      res.json(response.rows);
    })
  })
  return router;
}