const db = require("../index");

 const getWorkouts = () => {
  return db
    .query(`SELECT * FROM workouts;`)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    });
};

 const getWorkoutByProgramId = (program_id) => {
  return db
    .query(`SELECT * FROM workouts WHERE program_id=$1;`, [program_id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    });
};

 const addWorkouts = (workouts) => {
  return db
    .query(
      `INSERT INTO workouts (program_id, name, image, description, duration) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
      [
        workouts.program,
        workouts.name,
        workouts.image,
        workouts.description,
        workouts.duration
      ]
    )
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    });
};

 const deleteWorkout = (id) => {
  return db
    .query(`DELETE FROM workouts WHERE id=$1`,[id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    })
}

module.exports = {
  getWorkouts,
  getWorkoutByProgramId,
  addWorkouts,
  deleteWorkout
}