const express = require('express');
const router = express.Router();
const { Categories } = require('../models')

// GET /api/categories
router.get('/', (req, res) => {
  Categories.findAll()
  .then(categories => res.send(categories))
  .catch((err) => console.log('err:', err))
  // res.json({ message: 'You\'ve sent a GET request to /api/categories' });
});

//GET /api/categories/:id
router.get('/:id', (req, res) => {
  const categoryId = req.params.id;
  Categories.findById(categoryId)
  .then(categories => res.send(categories))
  .catch((err) => console.log('err:', err))
  // res.json({ message: `You\'ve sent a GET request to /api/categories/${categoryId}` });
});

module.exports = router;
