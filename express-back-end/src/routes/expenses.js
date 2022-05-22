const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/expenses', (req, res) => {
    db.query(`
    SELECT expenses.*,
      categories.name AS category_name,
      users.username
    FROM expenses
    JOIN users ON expenses.user_id = users.id
    JOIN categories ON category_id = categories.id
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
    SELECT expenses.*, username
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

  router.put('/expenses', (req, res) => {
    db.query(`
    INSERT INTO expenses (user_id, created_at, amount, category_id)
    VALUES ($1, $2, $3, $4);
    `, [req.body.expense.user_id, req.body.expense.created_at, req.body.expense.amount, req.body.expense.category_id])
    .then(data => {
      console.log('It has sucessfully added a new expense!!');
      const expenses = data.rows;
      res.json(expenses);
    })
    .catch(error => {
      console.log('The error is: ', error);
    });
  });

  router.delete('/delete', (req, res) => {
    db.query(
      `
      DELETE FROM expenses
      WHERE id = $1;
      `,
      [req.body.id]
    )
    .then(data => {       
      console.log('It has sucessfully deleted expense ID!! ',req.body);
      const removed = data.rows;
      res.json(removed);
    })
    .catch(error => {
      console.log('The error is: ', error);
    });
  });
  
  router.get('/savings', (req, res) => {
    db.query(`
    SELECT expenses.*, username
    FROM expenses
    JOIN users ON user_id = users.id
    WHERE category_id = 8
    ORDER BY created_at;
    `)
    .then(data => {
      const savings = data.rows;
      res.json(savings);
    })
    .catch(error => {
      console.log('The error is: ', error);
    });
  });

  router.get('/dataPoints', (req, res) => {
    db.query(`
    SELECT id, user_id, created_at AS x, amount AS y
    FROM expenses; 
    `)
    .then(data => {
      const dataPoints = data.rows;
      res.json(dataPoints);
    })
    .catch(error => {
      console.log('The error is: ', error);
    });
  });

  router.get('/alvin/vacation/spent', (req, res) => {
    db.query(`
    SELECT expenses.user_id,
      expenses.created_at,
      expenses.amount,
      expenses.category_id,
      goals.start_date AS start_date,
      goals.end_date AS end_date,
      goals.goal_name,
      goals.user_id AS goals_user_id,
      goals.id AS goals_id
    FROM expenses
    JOIN users ON expenses.user_id = users.id
    JOIN goals ON goals.user_id = users.id
    WHERE category_id != 8
    AND category_id !=5
    AND goal_name LIKE '%acation%'
    AND expenses.created_at > goals.start_date;
    `)
    .then(data => {
      const savings = data.rows;
      res.json(savings);
    })
    .catch(error => {
      console.log('The error is: ', error);
    });
  });

  return router;
};