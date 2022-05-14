const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/savingsjar', (req, res) => {
    db.query(`
    SELECT *
    FROM savings;
    `)
    .then(data => {
      const savings = data.rows;
      res.json(savings);
    })
    .catch(error => {
      console.log('The error is: ', error);
    })
  });
  return router;
};