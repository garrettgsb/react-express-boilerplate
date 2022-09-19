let dbParams = {};
if (process.env.DATABASE_URL) {
  dbParams.connectionString = process.env.DATABASE_URL;
} else {
  dbParams = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  };
}

const { Pool } = require("pg");
const db = new Pool(dbParams);

const testFunction = () => {
  return db
    .query(`SELECT * FROM test_users;`)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => console.error(err.stack));
};

const getAllUsers = () => {
  return db
    .query(`SELECT * FROM users;`)
    .then((result) => {
      const users = {};
      result.rows.forEach((row) => {
        const id = row.id;
        users[id] = row;
      });
      return { users };
    })
    .catch((err) => console.error(err.stack));
};

const getUser = (id) => {
  return db
    .query(
      `SELECT * FROM users
    WHERE users.id = $1;`,
      [id]
    )
    .then((result) => {
      const user = result.rows[0];
      return { user };
    })
    .catch((err) => console.error(err.stack));
};

const createUser = ({
  name,
  email,
  password,
  phone,
  gender,
  age,
  planner,
  runner,
}) => {
  return db
    .query(
      `INSERT INTO users (name, email, password, phone, gender, age, planner, runner)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
    RETURNING *;`,
      [name, email, password, phone, gender, age, planner, runner]
    )
    .then((result) => {
      const user = result.rows[0];
      return { user };
    })
    .catch((err) => console.error(err.stack));
};

const getAllRuns = () => {
  return db
    .query(`SELECT runs.id, runs.name, runs.description, runs.location, runs.time, runs.date 
    FROM runs
    WHERE runs.date >= CURRENT_DATE;`)
    .then((result) => {
      const runs = {};
      result.rows.forEach((row) => {
        const id = row.id;
        runs[id] = row;
      });
      return { runs };
    })
    .catch((err) => console.error(err.stack));
};

module.exports = {
  db,
  testFunction,
  getAllUsers,
  getUser,
  createUser,
  getAllRuns,
};
