const express = require('express');
const router = express.Router();
const db = require('../lib/db');

// GET route to show users notes 

router.get("/notes", (req, res) => {
  db.query(
    `SELECT * FROM posts WHERE posts.user_id = 1;`)
  .then(data => {
    res.json(data.rows)
    console.log("222222", data.rows)
  })
  .catch(err => {
    res.status(500, "Could Not Complete Request")
  })
})


// POST route to submit a new note
// router.post("/profile/create", (req, res) => {
//   db.query(
//     `INSERT INTO posts (body, time_stamp, isDeleted, user_id) VALUES ($1, $2, )`)
//     .then
// });


// POST route to submit users notes once they edit a note (maybe do it this way?)
// router.post("/profile/:userID/:postID")
//   return db.query(``)

// DELETE route to delete a note
// router.delete("")
//   return db.query(``)
module.exports = router;