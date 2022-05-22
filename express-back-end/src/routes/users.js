const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/users', (req, res) => {
    db.query(`
    SELECT *
    FROM users;
    `)
    .then(data => {
      const users = data.rows;
      res.json(users);
    })
    .catch(error => {
      console.log('This error is inside -> get (\'/users\') route: ', error);
    });
  });

  return router;
};