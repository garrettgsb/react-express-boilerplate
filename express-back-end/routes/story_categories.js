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

// GET /api/story-categories/:categoryId
router.get('/:id', (req, res) => {
  const category_id = req.params.id;
  StoryCategories.find({'story_categories.category_id': category_id})
    .leftJoin('stories', 'stories.id', 'story_categories.story_id')
    .select(
      'stories.id as story_id',
      'user_id',
      'title',
      'content',
      'status',
      'type',
      'view_count',
      'created_at',
      'published_date',
      'updated_at'
    )
    .then(sc => res.send(sc))
    .catch((err) => console.log('err:', err))
  // knex('story_categories')
  //   .join('stories', 'stories.id', 'story_categories.story_id')
    // .select(StoryCategories,
    //   'title',
    //   'content',
    //   'status',
    //   'type',
    //   'view_count',
    //   'created_at',
    //   'published_date',
    //   'updated_at'
    // )
});

module.exports = router;
