const db = require('./db');

const getBooking = (id) => {
  return db.query(`
  SELECT *
  FROM bookings
  where id = $1;
  `, [id])
    .then(res => {
      return res.rows;
    });
};

module.exports.getBooking = getBooking;

const getBookingsByTour = (tourId) => {
  return db.query(`
  SELECT *
  FROM bookings
  where tour_id = $1
  `, [tourId])
    .then(res => {
      return res.rows;
    });
};

module.exports.getBookingsByTour = getBookingsByTour;

const getBookingsByUser = (userId) => {
  return db.query(`
  SELECT *
  FROM bookings
  where user_id = $1
  `, [userId])
    .then(res => {
      return res.rows;
    });
};

module.exports.getBookingsByUser = getBookingsByUser;
