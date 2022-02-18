const db = require('./index');

const getUsers = () => {
  return db.query(`SELECT * FROM users;`)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log('DB error fetching users. Message: ' + err.message);
    });
};

const existsUserById = (user_id) => {
  return db.query(`SELECT COUNT(*) FROM users WHERE id = ${user_id};`)
    .then((res) => {
      return parseInt(res.rows[0].count);
    })
    .catch((err) => {
      console.log('DB error fetching user by id. Message: ' + err.message);
    });
};


module.exports = {
  getUsers,
  existsUserById
};
