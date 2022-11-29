const db = require("../index");

 const getExercises = () => {
  return db
    .query(`SELECT * FROM exercises;`)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    });
};

 const getExerciseId = (Id) => {
  return db
    .query(`SELECT * FROM exercises WHERE id=$1;`, [Id])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      err.message;
    });
};

 const addExercise = (exercises) => {
  return db
    .query(
      `INSERT INTO exercises (name, type, muscle, equipment, difficulty, image, instructions) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`,
      [
        exercises.name,
        exercises.type,
        exercises.muscle,
        exercises.equipment,
        exercises.difficulty,
        exercises.image,
        exercises.instructions
      ]
    )
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    });
};

 const deleteExercise = (id) => {
  return db
    .query(`DELETE FROM exercise WHERE id=$1`,[id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    })
}

module.exports = {
  getExerciseId,
  getExercises,
  addExercise,
  deleteExercise
}