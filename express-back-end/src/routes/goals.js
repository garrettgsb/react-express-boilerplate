const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/goals', (req, res) => {
    db.query(`
    SELECT *
    FROM goals;
    `)
    .then(data => {
      const goals = data.rows;
      res.json(goals);
    })
    .catch(error => {
      console.log('The error is: ', error);
    });
  });
  return router;
};