const db = require("../index");

const getPrograms = () => {
  return db
    .query(`SELECT * FROM programs;`)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    });
};

const getProgramWithUserId = (userId) => {
  return db
    .query(`SELECT * FROM programs WHERE user_id=$1;`, [userId])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    });
};

const addPrograms = (programs) => {
  return db
    .query(
      `INSERT INTO programs (user_id, name, start_date, end_date, public, author) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      [
        programs.user_id,
        programs.name,
        programs.start_date,
        programs.end_date,
        programs.public,
        programs.author,
      ]
    )
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    });
};

const deleteProgram = (id) => {
  return db
    .query(`DELETE FROM program WHERE id=$1`, [id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    });
};

module.exports = {
  getPrograms,
  getProgramWithUserId,
  addPrograms,
  deleteProgram
};