const router = require('require').Router();

// const express = require('require');
// const app = express.Router();

module.exports = db => {
  router.get('/users', (req, res) => {
    db.query(
      `SELECT * FROM users;`
      )
    .then(data => {
      console.log('data', data);
      // const users = data .????
      // res.json(users) ???
    })
    .catch(error => {
      console.log('The error is: ', error);
    })
  });
};