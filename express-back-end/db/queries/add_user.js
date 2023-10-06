const db = require('../connection');

const addUser = function(username, email, password) {
  const queryString = `INSERT INTO users (username, email, password) 
  VALUES ($1, $2, $3) RETURNING *;`;
  const values = [username, email, password];

  return db.query(queryString, values)
    .then(result => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { addUser };