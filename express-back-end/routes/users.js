const Express = require("express");
const router = Express.Router();
const { Users, Stories } = require("../models");

// Handle user login  ---- /api/users/login/:id
router.get("/login/:id", (req, res) => {
  console.log(req.params.id);
  const email = req.params.id;
  Users.find({ email })
    .then((user) => {
      console.log(user);
      res.send(user);
    })
    .catch((err) => console.log("err:", err));
});

// GET all users ---- /api/users
router.get('/', (req, res) => {
  Users.findAll()
    .then(users => {
      const data = {
        users,
        message: 'Get all user'
      }
      res.send(data)
    })
    .catch((err) => console.log('err:', err))
});

// GET a user by id ---- /api/users/:id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Users.findById(id)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => console.log("err:", err));
});

// GET stories of a user by id ---- /api/users/:id/stories
router.get("/:id/stories", (req, res) => {
  const userId = req.params.id;
  Stories.find({ user_id: userId })
    .then((stories) => {
      console.log(stories);
      res.send(stories);
    })
    .catch((err) => console.log("err:", err));
});

// UPDATE a user by id  ---- /api/users/:id
router.put('/:id', (req, res) => {
  const userId = req.params.id;
  const props = req.body.user

  Users.update(userId, props)
    .then(users => res.send(users))
    .catch((err) => console.log('err:', err))
  // res.json({ message: `You\'ve sent a PUT request to /api/users/${userId}` });
});

// POST a new user  ---- /api/users
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

// DELETE a user by id
router.delete("/:id", (req, res) => {
  const userId = req.params.id;

  Users.destroy(userId)
    .then((users) => res.send(users))
    .catch((err) => console.log("err:", err));
});

module.exports = router;
