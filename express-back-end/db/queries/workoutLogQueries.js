const db = require("../index");

 const getWorkOutLogs = () => {
  return db
    .query(`SELECT * FROM workout_logs;`)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    });
};

const getWorkOutLogsByUserId = (user_id) => {
  return db
    .query(`SELECT * FROM workout_logs WHERE user_id=$1`,[user_id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    });
};

const addWorkoutLogs = (workout_logs) => {
  return db
    .query(
      `INSERT INTO workout_logs (user_id, value, day) VALUES ($1, $2, $3) RETURNING *;`,
      [
        workout_logs.user_id,
        workout_logs.value,
        workout_logs.day
      ]
    )
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    });
};

module.exports = {
  getWorkOutLogs,
  getWorkOutLogsByUserId,
  addWorkoutLogs
}