const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/incomes', (req, res) => {
    db.query(`
    SELECT *
    FROM incomes;
    `)
    .then(data => {
      const incomes = data.rows;
      res.json(incomes);
    })
    .catch(error => {
      console.log('The error is: ', error);
    });
  });
  return router;
};