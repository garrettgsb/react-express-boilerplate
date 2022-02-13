const pg = require('pg');
const client = require('./connection');

const getAllUsers = () => {
  return client.query('SELECT * FROM users;')
    .then((results) => {
      console.log(results.rows);
      return results.rows;
    })
}

module.exports = { getAllUsers }