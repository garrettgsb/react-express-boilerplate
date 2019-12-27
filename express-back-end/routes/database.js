// PG database 
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'travelly',
  password: 'travellylhl',
  database: 'travelly'
});

module.exports = {

  // get single user from databse with given email
  getUserWithEmail: (email) => {
    return pool.query(`
      SELECT * FROM users WHERE email = $1
    `, [email])
      .then(res => {
        console.log(res);
        if (res.rows) {
          console.log(res.rows);
          return res.rows[0];
        } else {
          return null;
        }
      })
      .catch(err => console.log(err));
  }

}