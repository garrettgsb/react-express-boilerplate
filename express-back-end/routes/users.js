const Express = require('express');
const router = Express.Router();
const { Users } = require('../models')

// GET /api/users
router.get('/', (req, res) => {
  Users.findAll()
    .then(user => {
      const data = {
        user,
        message: 'Get all user'
      }
      res.send(data)
    })
    .catch((err) => console.log('err:', err))
});

// POST /api/users
router.post('/', (req, res) => {
  const props = req.body
  Users.create(props)
    .then(user => res.json({
        ok: true,
        message: 'User created',
        user
      }))
    .catch((err) => console.log('err:', err))
});

// GET /api/users/:id
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  Users.findById(userId)
    .then(users => res.send(users))
    .catch((err) => console.log('err:', err))
});

// PUT /api/users/:id
router.put('/:id', (req, res) => {
  const userId = req.params.id;
  const props = req.body.user

  Users.update(userId, props)
    .then(users => res.send(users))
    .catch((err) => console.log('err:', err))
  // res.json({ message: `You\'ve sent a PUT request to /api/users/${userId}` });
});

// DELETE /api/users/:id
router.delete('/:id', (req, res) => {
  const userId = req.params.id;

  Users.destroy(userId)
    .then(users => res.send(users))
    .catch((err) => console.log('err:', err))
  // res.json({ message: `You\'ve sent a DELETE request to /api/users/${userId}` });
});

module.exports = router;
