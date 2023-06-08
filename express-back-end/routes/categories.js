const express = require('express');
const router = express.Router();
const { Categories, StoryCategories } = require('../models')

// GET all categories ---- /api/categories
router.get('/', (req, res) => {
  Categories.findAll()
  .then(categories =>{ res.send(categories)})
  .catch((err) => console.log('err:', err))
});

// GET a single category by id ---- /api/categories/:id
router.get('/:id', (req, res) => {
  const categoryId = req.params.id;
  StoryCategories.getAllStoriesByCategoryId(categoryId)
    .then(sc => res.send(sc))
    .catch((err) => console.log('err:', err))
});

module.exports = router;
