const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/addsavings', (req, res) => {
    db.query(`
      SELECT *
      FROM add_savings;
      `)
    .then(data => {
      const addAmounts = data.rows;
      res.json(addAmounts);
    })
    .catch(error => {
      console.log('The error is: ', error);
    })
  })
  return router;
};