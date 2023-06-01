const express = require('express');
const router = express.Router();

// GET /api/categories
router.get('/', (req, res) => {
  res.json({ message: 'You\'ve sent a GET request to /api/categories' });
});

module.exports = router;
