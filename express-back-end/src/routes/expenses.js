const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/expenses', (req, res) => {
    db.query(`
    SELECT expenses.*, username, categories.name AS category 
    FROM expenses
    JOIN users ON user_id = users.id
    JOIN categories ON category_id = categories.id
    WHERE category_id != 5;
    `)
    .then(data => {
      const expenses = data.rows;
      res.json(expenses);
    })
    .catch(error => {
      console.log('The error is: ', error);
    });
  });

  router.get('/allexpenses', (req, res) => {
    db.query(`
    SELECT *
    FROM expenses;
    `)
    .then(data => {
      const expenses = data.rows;
      res.json(expenses);
    })
    .catch(error => {
      console.log('The error is: ', error);
    });
  });

  router.get('/incomes', (req, res) => {
    db.query(`
    SELECT *, users.username
    FROM expenses
    JOIN users ON user_id = users.id
    WHERE category_id = 5;
    `)
    .then(data => {
      const income = data.rows;
      res.json(income);
    })
    .catch(error => {
      console.log('The error is: ', error);
    });
  });

  const today = new Date();
  const date = `${today.getFullYear()}-${(today.getMonth()+1)}-${today.getDate()}`;
  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  const timeFormat = (time) => {
    if (time.length < 8) {
      return '0'.concat(time);
    }
    return time;
  };
  const dateTime = `${date} ${timeFormat(time)}`;

  router.put('/expenses/:id', (req, res) => {
    console.log('REQ.BODY 1:--', req.body);
    db.query(`
    INSERT INTO expenses (user_id, created_at, amount, category_id)
    VALUES ($1, $2, $3, $4);
    `, [Number(req.body), dateTime, Number(req.body.something), Number(req.params.id)])
    console.log('REQ.BODY 2:--', req.body)
    // console.log('REQ.PARAMS: --', req.params)
    .catch(error => {
      console.log('The error is: ', error);
    });
  })
  

  return router;
};