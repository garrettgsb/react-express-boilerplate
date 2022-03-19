//PG database client/connection setup
require("dotenv").config();
const { Pool } = require("pg");

const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const db = new Pool(dbParams);

db.connect(() => {
  console.log("database is connected");
});

module.exports = db;
