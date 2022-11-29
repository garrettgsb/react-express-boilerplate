const db = require("../index");

const getExerciseSelection = () => {
  return db
    .query(`SELECT * FROM exercise_selections;`)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    });
};

const getExerciseSelectionByWorkoutId = (workout_id) => {
  return db
    .query(`SELECT * FROM exercise_selections WHERE workout_id=$1;`, [
      workout_id,
    ])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      err.message;
    });
};

const getExerciseSelectionById = (id) => {
  return db
    .query(`SELECT * FROM exercise_selections WHERE id=$1;`, [id])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      err.message;
    });
};

const addExerciseSelection = (exercise_selections) => {
  return db
    .query(
      `INSERT INTO exercise_selections (workout_id, exercise_id, set, reps, load, rest_period, duration, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
      [
        exercise_selections.workout_id,
        exercise_selections.exercise_id,
        exercise_selections.sets,
        exercise_selections.reps,
        exercise_selections.load,
        exercise_selections.rest_period,
        exercise_selections.duration,
        exercise_selections.notes,
      ]
    )
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    });
};

const updateExerciseSelection = async (id, exerciseInfo) => {
  const setColumns = Object.keys(exerciseInfo).map((property, index) => `${property}=$${index + 2}`).join(', ')

  const queryDef = {
      text: `
    UPDATE exercise_selections
    SET ${setColumns}
    WHERE id = $1 RETURNING *`,
      values: [id, ...Object.values(exerciseInfo)],
  };
  const data = await db.query(queryDef);
  return data.rows[0];
};

const deleteExerciseSelection = (id) => {
  return db
    .query(`DELETE FROM exercise_selections WHERE id=$1`, [id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    });
};

module.exports = {
  getExerciseSelection,
  getExerciseSelectionById,
  getExerciseSelectionByWorkoutId,
  updateExerciseSelection,
  addExerciseSelection,
  deleteExerciseSelection,
};
