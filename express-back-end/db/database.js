// psql connection config
require('dotenv').config();
const pg = require('pg');
const Pool = pg.Pool;

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};

const db = new Pool(config);

db.connect(() => {
  console.log('connected to database');
})

module.exports = db;