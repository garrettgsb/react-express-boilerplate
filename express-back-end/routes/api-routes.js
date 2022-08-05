const express = require('express');
const router = express.Router();

// DB queries
const db = require('../db/database');

// Test query and api route
router.get('/data', (req, res) => {
  return db.query('SELECT * FROM users;')
  .then(({rows: users}) => {
    res.json(users);
  })
  .catch((error) => console.log('err:', error));
});

module.exports = router;