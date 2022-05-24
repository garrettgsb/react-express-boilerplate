const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const saltRounds = 10;

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

  router.post('/register', (req, res) => {
    const password = req.body.password;
    bcrypt.hash(password, saltRounds, (error, hash) => {
      if (error) {
        console.log('Hash error: ', error);
      }
      
      db.query(`
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3);
      `, [req.body.username, req.body.email, hash])
      .then(data => {
        const users = data.rows;
        res.json(users);
      })
      .catch(error => {
        console.log('This error is inside -> post (\'/register\') route: ', error);
      });
    })
  });

  router.post('/login', (req, res) => {
    db.query(`
    SELECT *
    FROM users
    WHERE email = $1;
    `,
    [req.body.email])
    .then(data => {
      const users = data.rows;
      bcrypt.compare(req.body.password, data.rows[0].password, (error, response) => {
        if (response) {
          res.json(users);
        }
        else {
          console.log('Password error: ~', error);
        }
      })
    })
    .catch(error => {
      console.log('This error is inside -> post (\'/login\') route: ', error);
    });
  });


  return router;
};