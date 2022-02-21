const express = require('express');
const router = express.Router();

const {
  getComments
} = require('../db/comments-queries');

// GET all comments
router.get("/", (req, res) => {
  getComments()
    .then((comments) => {
      res.json({
        comments
      });
    })
    .catch(err => {
      res
        .status(500)
        .json({
          error: err.message
        });
    });
});

module.exports = router;