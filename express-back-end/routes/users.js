const Express = require('express');
const router = Express.Router();

// GET /api/users
router.get('/', (req, res) => {
  res.json({ message: 'You\'ve sent a GET request to /api/users' });
});

// POST /api/users
router.post('/', (req, res) => {
  res.json({ message: 'You\'ve sent a POST request to /api/users' });
});

// GET /api/users/:id
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `You\'ve sent a GET request to /api/users/${userId}` });
});

// PUT /api/users/:id
router.put('/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `You\'ve sent a PUT request to /api/users/${userId}` });
});

// DELETE /api/users/:id
router.delete('/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `You\'ve sent a DELETE request to /api/users/${userId}` });
});

module.exports = router;
