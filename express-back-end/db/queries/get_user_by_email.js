const db = require('../connection');

const getUserWithEmail = function(email) {
  return db.query(`SELECT * FROM users WHERE email = $1`, [`${email}`])
    .then(result => {
      if(!result.rows[0]) {
        return null;
      }
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { getUserWithEmail };