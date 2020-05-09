const db = require('./db');

const getUsers = () => {
  return db.query(`
  SELECT *
  FROM users;
  `)
    .then(res => {
      return res.rows;
    });
};

module.exports.getUsers = getUsers;

const getUser = (id) => {
  return db.query(`
  SELECT *
  FROM users
  WHERE id = $1;
  `, [id])
    .then(res => {
      return res.rows[0];
    });
};

module.exports.getUser = getUser;
