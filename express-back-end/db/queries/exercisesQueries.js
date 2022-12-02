const db = require("../index");

const getExerciseById = (Id) => {
  return db
    .query(`SELECT * FROM exercises WHERE id=$1;`, [Id])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      err.message;
    });
};

// General query: selects all or by workout id
const getExercises = (options) => {
  let queryString = "SELECT * FROM exercises";
  const queryParams = [];
  if (options.workoutId) {
    queryString += " WHERE workout_id=$1";
    queryParams.push(options.workoutId);
  }
  queryString += " ORDER BY created_at";
  return db
    .query(queryString, queryParams)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    });
};

const addExercise = (exercises) => {
  return db
    .query(
      `INSERT INTO exercises (workout_id, name, type, muscle, equipment, difficulty, image, instructions, sets, reps, load, rest_period, duration, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *;`[
        (exercises.workout_id,
        exercises.name,
        exercises.type,
        exercises.muscle,
        exercises.equipment,
        exercises.difficulty,
        exercises.image,
        exercises.instructions,
        exercises.sets,
        exercises.reps,
        exercises.load,
        exercises.rest_period,
        exercises.duration,
        exercises.notes)
      ]
    )
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    });
};

const updateExercise = async (id, exerciseInfo) => {
  const setColumns = Object.keys(exerciseInfo)
    .map((property, index) => `${property}=$${index + 2}`)
    .join(", ");

  const queryDef = {
    text: `
    UPDATE exercises
    SET ${setColumns}
    WHERE id = $1 RETURNING *`,
    values: [id, ...Object.values(exerciseInfo)],
  };
  const data = await db.query(queryDef);
  return data.rows[0];
};

const deleteExercise = (id) => {
  return db
    .query(`DELETE FROM exercise WHERE id=$1`, [id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    });
};

module.exports = {
  getExerciseById,
  getExercises,
  updateExercise,
  getExercises,
  addExercise,
  deleteExercise,
};
