const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/:booking_id", (req, res) => {
    db.getBooking(req.params.booking_id)
      .then(booking => {
        res.json({ booking });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/tour/:tour_id", (req, res) => {
    db.getBookingsByTour(req.params.tour_id)
      .then(bookings => {
        res.json({ bookings });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/user/:user_id", (req, res) => {
    db.getBookingsByUser(req.params.user_id)
      .then(bookings => {
        res.json({ bookings });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
