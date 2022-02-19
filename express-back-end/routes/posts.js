/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const { getPosts, saveNewPost, getFilteredPosts } = require('../db/post-queries');
const { existsUserById } = require('../db/user-queries');

// GET all posts
router.get("/", (req, res) => {
  getPosts()
    .then((posts) => {
      res.json({ posts });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// POST request to fetch filtered posts
router.post("/filter", (req, res) => {
  const {topic} = req.body.data;
  getFilteredPosts(topic)
    .then((posts) => {
      res.json({ posts });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// POST to posts table
router.post("/", (req, res) => {
  console.log('Route for new post');

  const post = req.body;
  const postError = isInvalidPost(post);
  if (postError) {
    res.status(400).send(postError);
    return;
  }

  // post is valid, persist it in DB
  saveNewPost(post)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => console.log(error));
});

const isInvalidPost = (post) => { // helper function for router
  // 1. validate user_id
  const userId = post.user_id;
  if (!userId) {
    const error = `Invalid request, 'user_id' is required`;
    console.log(error);
    return error;
  } else {
    const exists = existsUserById(userId);
    if (!exists) {
      const error = `Invalid request, 'user_id' is not found`;
      console.log(error);
      return error;
    }
  }
  // 2. validate topic
  if (!post.topic || !post.topic.trim()) {
    const error = `Invalid request, 'topic' is required`;
    console.log(error);
    return error;
  }
  return null;
};

// export router object
module.exports = router;
