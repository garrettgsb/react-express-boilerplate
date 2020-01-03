const router = require("express").Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    db.query(
      `
      SELECT * FROM itineraries;
      `
    )
    .then((response) => {
      res.json(response.rows);
    })
  })

  router.get('/:id', (req, res) => {
    db.query(
      `
      SELECT * FROM attractions;
      `
    )
    .then((response) => {
      res.json(response.rows);
    })
  })

  return router;
}