// psql connection config
require('dotenv').config();
const pg = require('pg');
const Pool = pg.Pool;

const config = {
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE
};

const db = new Pool(config);

db.connect(() => {
  console.log('connected to database');
})

module.exports = db;