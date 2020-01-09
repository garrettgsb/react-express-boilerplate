const router = require("express").Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    db.query(
      `
      SELECT *, itineraries.id AS id FROM itineraries
      JOIN user_itinerary on itineraries.id = user_itinerary.itinerary_id
      WHERE user_itinerary.user_id = $1;
      `, [req.session.userId]
    )
    .then((response) => {
      res.json(response.rows);
    })
  })

  router.get('/:id', (req, res) => {
    db.query(
      `
      SELECT *, timeslots.id AS id FROM timeslots
      FULL OUTER JOIN attractions ON attraction_id = attractions.id
      FULL OUTER JOIN itineraries ON itinerary_id = itineraries.id
      WHERE itinerary_id = $1
      ORDER BY start_time
      ;
      `, [req.params.id]
    )
    .then((response) => {
      res.json(response.rows);
    })
  })

  router.post('/:id/edit', (req, res) => {
    db.query(
      `
      UPDATE timeslots
      SET start_time = null, end_time = null
      FROM itineraries
      WHERE itinerary_id = itineraries.id AND itinerary_id = $1;
      `, [req.params.id]
    )
    .then((response) => {
      res.send(200)
    })
  })

  return router;
}