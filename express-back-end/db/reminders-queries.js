const db = require("./index");

const getReminders = () => {
  return db
    .query(`SELECT * FROM reminders;`)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log("DB error inserting reminder: " + err.message);
    });
};

const insertReminder = (data) => {
  // eslint-disable-next-line camelcase
  const { plant_id, user_id, watering_interval, last_watered } = data;
  return db
    .query(
      `
      INSERT INTO reminders (plant_id, user_id, watering_interval, last_watered) VALUES ($1, $2, $3, $4) RETURNING *;
    `,
      [plant_id, user_id, watering_interval, last_watered]
    )
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log("DB error inserting reminder: " + err.message);
    });
};

const editLastWatered = (data) => {
  const { plant_id, last_watered } = data;
  return db
    .query(
      `
    UPDATE reminders SET last_watered = $1 WHERE plant_id = $2 RETURNING *;
    `,
      [last_watered, plant_id]
    )
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log("DB error inserting reminder: " + err.message);
    });
};

module.exports = {
  insertReminder,
  editLastWatered,
  getReminders,
};
