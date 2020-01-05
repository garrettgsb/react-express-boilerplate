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
      SELECT * FROM attractions
      JOIN timeslots ON attractions.id = timeslots.attraction_id
      JOIN itineraries ON timeslots.itinerary_id = itineraries.id
      WHERE itinerary_id = $1
      ;
      `, [req.params.id]
    )
    .then((response) => {
      res.json(response.rows);
    })
  })

  return router;
}