const Express = require("express");
const router = Express.Router();
const { Users, Stories } = require("../models");

// Handle user login
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

// GET all users
router.get("/", (req, res) => {
  Users.findAll()
    .then((users) => res.send(users))
    .catch((err) => console.log("err:", err));
});

// GET a user by id
router.get("/:id", (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  Users.findById(id)
    .then((user) => {
      console.log(user);
      res.send(user);
    })
    .catch((err) => console.log("err:", err));

  //     const stories = Stories.find({ user_id: user[0].id }).then((stories) => {
  //       console.log(stories);
  //       res.send(stories);
  //     });
  //   })
  //   .catch((err) => console.log("err:", err));
  // res.json({ message: `You\'ve sent a GET request to /api/users/${userId}` });
});

// GET stories of a user by id
router.get("/:id/stories", (req, res) => {
  const userId = req.params.id;
  Stories.find({ user_id: userId })
    .then((stories) => {
      console.log(stories);
      res.send(stories);
    })
    .catch((err) => console.log("err:", err));
});

// UPDATE a user by id
router.put("/:id", (req, res) => {
  const userId = req.params.id;
  const props = req.body.user;
  console.log(req.body);

  Users.update(userId, props)
    .then((users) => res.send(users))
    .catch((err) => console.log("err:", err));
});

// DELETE a user by id
router.delete("/:id", (req, res) => {
  const userId = req.params.id;

  Users.destroy(userId)
    .then((users) => res.send(users))
    .catch((err) => console.log("err:", err));
});

module.exports = router;
