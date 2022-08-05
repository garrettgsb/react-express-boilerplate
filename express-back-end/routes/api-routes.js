const express = require('express');
const router = express.Router();

// DB queries
const queries = require('../db/db-queries');

// Test query and api route
router.get('/data', (req, res) => {
  return queries.getTestMessage()
    .then((res) => {
      console.log('results:', res);
    })
    .catch((error) => console.log('error:', error));
});

module.exports = router;