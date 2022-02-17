/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const wishlistQueries = require('../db/wishlist-queries');

// GET wishlist table
router.get("/", (req, res) => {
  wishlistQueries.getWishlist()
    .then((wishlist) => {
      res.json({ wishlist });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// export router object
module.exports = router;
