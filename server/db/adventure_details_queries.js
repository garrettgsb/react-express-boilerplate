const { pool } = require('./database');


const getAdventureDetails = () => {
  return pool.query(`SELECT adventures.*, adventure_availibilties.*, users.pic, users.first_name, users.last_name
  FROM adventures
  JOIN users ON users.id = owner_id
  JOIN adventure_availibilties
   ON adventure_id = adventures.id 
  WHERE adventures.id = $1;
  `, [2])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message
    });
}

const addReservation = () => {
  return pool.query(`
  INSERT INTO reservations(date, total_price, guest_id, payment_id, total_guests, adventure_id)
  VALUES($1, $2, $3, $4, $5, $6)
  `, [])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message
    });
}
module.exports = { getAdventureDetails, addReservation }