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
    FROM expenses 
    ORDER BY id DESC;
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
    db.query(`
    INSERT INTO expenses (user_id, created_at, amount, category_id)
    VALUES ($1, $2, $3, $4);
    `, [req.body.expense.user_id, req.body.expense.created_at, req.body.expense.amount, req.body.expense.category_id])
    .then(data => {
      const expenses = data.rows;
      res.json(expenses);
    })
    .catch(error => {
      console.log('The error is: ', error);
    });
  })
  

  return router;
};