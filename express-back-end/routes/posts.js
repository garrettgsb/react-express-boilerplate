/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const {getPosts, saveNewPost} = require('../db/post-queries');
const {existsUserById} = require('../db/user-queries');

// GET posts table
router.get("/", (req, res) => {
  getPosts()
    .then((posts) => {
      res.json({posts});
    })
    .catch(err => {
      res
        .status(500)
        .json({error: err.message});
    });
});

// POST to posts table
router.post("/", async (req, res) => {
  console.log('Route for new post');

  const post = req.body;
  const postError = await isInvalidPost(post);
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

async function isInvalidPost(post) {
  // 1. validate user_id
  const userId = post.user_id;
  if (!userId) {
    const error = `Invalid request, 'user_id' is required`;
    console.log(error);
    return error;
  } else {
    const exists = await existsUserById(userId);
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
}

// export router object
module.exports = router;
