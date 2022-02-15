const db = require('./index');

const getUsers = () => {
  return db.query(`SELECT * FROM users;`)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log('DB error fetching users: ' + err.message);
    });
};


module.exports = {
  getUsers
};
