const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/expenses', (req, res) => {
    db.query(`
    SELECT *, users.username
    FROM expenses
    JOIN users ON user_id = users.id
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

  // router.get('/expenses/:id', (req, res) => {
  //   db.query(`
  //   SELECT expenses.*, categories.*
  //   FROM expenses
  //   JOIN categories ON category_id = categories.id
  //   where user_id = ${req.params.id}
  //   ORDER BY expenses.created_at DESC;
  //   `)
  //   .then(data => {
  //     const expenses = data.rows;
  //     res.json(expenses);
  //   })
  //   .catch(error => {
  //     console.log('The error is: ', error);
  //   });
  // });


  router.get('/expenses/:id', (req, res) => {
    db.query(`
    SELECT *
    FROM expenses
    WHERE user_id = ${req.params.id};
    `)
    .then(data => {
      const expenses = data.rows;
      res.json(expenses);
    })
    .catch(error => {
      console.log('The error is: ', error);
    });
  });

  router.get('/expenses/:id/:catid', (req, res) => {
    db.query(`
    SELECT *
    FROM expenses
    WHERE user_id = ${req.params.id}
    AND category_id = ${req.params.catid};
    `)
    .then(data => {
      const expenses = data.rows;
      res.json(expenses);
    })
    .catch(error => {
      console.log('The error is: ', error);
    });
  });

  return router;
};