const express = require('express');
const router = express.Router();

module.exports = db => {
  // router.get('/users', (req, res) => {
  //   db.query(`
  //   SELECT *
  //   FROM users;
  //   `)
  //   .then(data => {
  //     const users = data.rows;
  //     res.json(users);
  //   })
  //   .catch(error => {
  //     console.log('The error is: ', error);
  //   });
  // });
  
  router.get('/users/:email/', (req, res) => {
    // console.log('REQ.PARAMS.USER.USERNAME', req.params.email);
    // console.log('REQ.PARAMS.USER.PASSWORD', req.params.password);
    db.query(`
    SELECT *
    FROM users
    WHERE email = $1;
    `, [req.params.email])
    .then(data => {
      // console.log('It reached .then in get request!!~');
      const user = data.rows;
      res.json(user);
    })
    .catch(error => {
      console.log('The error is: ', error);
    });
  })

  return router;
};