const { Pool } = require("pg");


const pool = new Pool({
  user: 'development',
  password: 'development',
  host: 'localhost',
  database:'daytrip'
});

const getUserWithEmail = function(email) {
  const queryString = `SELECT * FROM users WHERE email = $1;`;
  const values = [email];

  return pool.query(queryString, values)
    .then((result) => result.rows[0] || null)
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = {getUserWithEmail};