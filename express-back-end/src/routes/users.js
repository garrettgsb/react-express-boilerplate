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
      console.log('The error is: ', error);
    });
  });
  
  router.get('/users/:id', (req, res) => {
    db.query(`
    SELECT *
    FROM users
    WHERE id = $1
    `, [req.params.id])
    .then(data => {
      const user = data.rows;
      res.json(user);
    })
  });
  return router;
};