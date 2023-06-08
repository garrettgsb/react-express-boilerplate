const Express = require('express');
const router = Express.Router();
const { StoryCategories} = require('../models')

// GET /api/story-categories
router.get('/', (req, res) => {
  StoryCategories.findAll()
    .then(user => {
      const data = {
        user,
        message: 'Get all user'
      }
      res.send(data)
    })
    .catch((err) => console.log('err:', err))
});

module.exports = router;
