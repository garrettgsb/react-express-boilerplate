const express = require('express');
const router = express.Router();

const {
  getComments, saveNewComment
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

// POST to comments table
router.post("/", (req, res) => {
  console.log('Route for new comment');

  const comment = req.body;
  
  saveNewComment(comment)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => console.log(error));
});

module.exports = router;