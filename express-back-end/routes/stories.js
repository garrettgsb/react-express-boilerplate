const Express = require('express');
const router = Express.Router();
const { Stories, StoryCategories } = require('../models')

// GET /api/stories
router.get('/', (req, res) => {
  Stories.findAll()
    .then(story => {
      const data = {
        story,
        message: 'Get all story'
      }
      res.send(data)
    })
    .catch((err) => console.log('err:', err))
});

// POST /api/stories
router.post('/', (req, res) => {
  const props = req.body
  Stories.create(props)
    .then(story => {
      const params = {
        story_id: story.id,
        category_id: story.category_id
      }
      StoryCategories.create(params)
      res.json({
        ok: true,
        message: 'Stories created',
        story
      })
    })
    .catch((err) => console.log('err:', err))

  
});

// GET /api/stories/:id
router.get('/:id', (req, res) => {
  const storyId = req.params.id;
  Stories.findById(storyId)
    .then(story => res.send(story))
    .catch((err) => console.log('err:', err))
});

// PUT /api/stories/:id
router.put('/:id', (req, res) => {
  const storyId = req.params.id;
  const props = req.body.story

  Stories.update(storyId, props)
    .then(story => res.send(story))
    .catch((err) => console.log('err:', err))
});

// DELETE /api/stories/:id
router.delete('/:id', (req, res) => {
  const storyId = req.params.id;
  Stories.destroy(storyId)
    .then(story => res.send(story))
    .catch((err) => console.log('err:', err))
});

module.exports = router;
