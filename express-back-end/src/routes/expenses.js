const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/expenses', (req, res) => {
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
  return router;
};