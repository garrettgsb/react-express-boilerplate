require('dotenv').config();
const { Pool } = require('pg');

let dbParams = {};

dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
}

console.log(dbParams);
const pool = new Pool(dbParams);

//PG connection setup
pool.connect(() => {
  console.log('Postgres db connected');
});

module.exports = pool;
