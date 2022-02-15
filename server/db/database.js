const { Pool } = require("pg");

const pool = new Pool({
  user: 'development',
  password: 'development',
  host: 'localhost',
  database:'daytrip'
});


module.exports = { pool };