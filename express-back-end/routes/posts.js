/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const postQueries = require('../db/post-queries');

// GET posts table
router.get("/", (req, res) => {
  postQueries.getPosts()
    .then((posts) => {
      res.json({ posts });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});




// export router object
module.exports = router;
