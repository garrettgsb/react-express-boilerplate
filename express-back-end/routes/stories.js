const Express = require('express');
const router = Express.Router();
const { Users, Stories } = require('../models');

// GET all stories
router.get('/', (req, res) => {
  res.json({ message: 'You\'ve sent a GET request to /api/stories' });
});

// GET a single story by id
router.get('/:id', (req, res) => {
  const storyId = req.params.id;
  Stories.findById(storyId)
    .then((story) => {
      console.log(story);
      res.send(story);
    })
    .catch((err) => console.log('err:', err));
});

// UPDATE a story by id
router.put('/:id', (req, res) => {
  const storyId = req.params.id;
  const props = req.body.story;
  console.log(req.body);
  Stories.update(storyId, props)
    .then((story) => {
      console.log(story);
      res.send(story);
    })
    .catch((err) => console.log('err:', err));
});

// POST /api/stories
router.post('/', (req, res) => {
  res.json({ message: 'You\'ve sent a POST request to /api/stories' });
});



// PUT /api/stories/:id
router.put('/:id', (req, res) => {
  const storyId = req.params.id;
  res.json({ message: `You\'ve sent a PUT request to /api/stories/${storyId}` });
});

// DELETE /api/stories/:id
router.delete('/:id', (req, res) => {
  const storyId = req.params.id;
  res.json({ message: `You\'ve sent a DELETE request to /api/stories/${storyId}` });
});

module.exports = router;
