const express = require('express');
const router = express.Router();

// Import and use individual route files
router.use('/stories', require('./stories'));
router.use('/users', require('./users'));
router.use('/categories', require('./categories'));

module.exports = router;
