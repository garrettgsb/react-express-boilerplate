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

const getProgramWithId = (Id) => {
  return db
    .query(`SELECT * FROM programs WHERE id = $1;`, [Id])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      err.message;
    });
};

const getProgramWithUserId = (userId) => {
  return db
    .query(`SELECT * FROM programs WHERE user_id = $1;`, [userId])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      err.message;
    });
};
// (user_id, name, description, start_date, end_date, public, author)
const addPrograms = (programs) => {
  return db
    .query(
      `INSERT INTO programs (user_id, name, description, start_date, end_date, public, author) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`,
      id,
      [
        programs.UserId,
        programs.name,
        programs.description,
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

const updatePrograms = async (id, programInfo) => {
  const setColumns = Object.keys(programInfo)
    .map((property, index) => `${property}=$${index + 2}`)
    .join(", ");

  const queryDef = {
    text: `
    UPDATE programs
    SET ${setColumns}
    WHERE id = $1 RETURNING *`,
    values: [id, ...Object.values(programInfo)],
  };
  const data = await db.query(queryDef);
  return data.rows[0];
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
  getProgramWithId,
  updatePrograms,
  addPrograms,
  deleteProgram,
};
