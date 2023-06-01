const Express = require('express');
const router = Express.Router();

// GET /api/stories
router.get('/', (req, res) => {
  res.json({ message: 'You\'ve sent a GET request to /api/stories' });
});

// POST /api/stories
router.post('/', (req, res) => {
  res.json({ message: 'You\'ve sent a POST request to /api/stories' });
});

// GET /api/stories/:id
router.get('/:id', (req, res) => {
  const storyId = req.params.id;
  res.json({ message: `You\'ve sent a GET request to /api/stories/${storyId}` });
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
