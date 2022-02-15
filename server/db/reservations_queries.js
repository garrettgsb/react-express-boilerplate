const { pool } = require('./database');


const getReservations = () => {
  // const guest = req.session.user_id
  return pool.query(`SELECT title, city, thumbnail_photo_url, reservations.date FROM adventures 
  JOIN reservations 
  ON adventures.id = adventure_id
  WHERE guest_id = $1
  `, [20])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });
}



module.exports = { getReservations }