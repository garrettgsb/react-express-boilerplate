const db = require('./index');

const insertReminder = (data) => {
  // eslint-disable-next-line camelcase
  const { plant_id, user_id, watering_interval, last_watered } = data;
  return db.query(
    `
      INSERT INTO reminders (plant_id, user_id, watering_interval, last_watered) VALUES ($1, $2, $3, $4) RETURNING *;
    `,
    // eslint-disable-next-line camelcase
    [plant_id, user_id, watering_interval, last_watered]
  )
    .then((res) => {
      // console.log('res.rows[0]', res.rows[0]);
      return res.rows;
    })
    .catch((err) => {
      console.log('DB error inserting reminder: ' + err.message);
    });
};

module.exports = {
  insertReminder
};
