const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/categories', (req, res) => {
    db.query(`
    SELECT *
    FROM categories;
    `)
    .then(data => {
      const categroies = data.rows;
      res.json(categroies);
    })
    .catch(error => {
      console.log('The erorr is: ', error);
    })
  });
  return router;
};