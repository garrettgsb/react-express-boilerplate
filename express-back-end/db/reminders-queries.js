const db = require("./index");

const getReminders = () => {
  return db
    .query(`SELECT * FROM reminders JOIN user_plants ON (reminders.plant_id = user_plants.id);`)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log("DB error getting reminders: " + err.message);
    });
};

const insertReminder = (data) => {

  const { plant_id, user_id, watering_interval, last_watered } = data;
  return db
    .query(
      `
      WITH inserted AS (
        INSERT INTO reminders (plant_id, user_id, watering_interval, last_watered) VALUES ($1, $2, $3, $4) RETURNING *)
        SELECT inserted.*, user_plants.* 
        FROM inserted 
        JOIN user_plants ON (inserted.plant_id = user_plants.id);
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