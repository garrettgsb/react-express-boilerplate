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

const getWorkoutById = (id) => {
  return db
    .query(`SELECT * FROM workouts WHERE id=$1;`, [id])
    .then((result) => {
      return result.rows[0];
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

const updateWorkOuts = async (id, workOutsInfo) => {
  const setColumns = Object.keys(workOutsInfo).map((property, index) => `${property}=$${index + 2}`).join(', ')

  const queryDef = {
      text: `
    UPDATE workouts
    SET ${setColumns}
    WHERE id = $1 RETURNING *`,
      values: [id, ...Object.values(workOutsInfo)],
  };
  const data = await db.query(queryDef);
  return data.rows[0];
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
  getWorkoutById,
  updateWorkOuts,
  getWorkoutByProgramId,
  addWorkouts,
  deleteWorkout
}