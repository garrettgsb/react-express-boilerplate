const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/expenses', (req, res) => {
    db.query(`
    SELECT *, users.username, categories.name as category_name
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

  return router;
};