const express = require('express');
const router = express.Router();
const db = require('../lib/db');

// GET route to show users notes 
router.get("/notes", (req, res) => {
  db.query(
    `SELECT * FROM posts WHERE posts.user_id = 1;`)
  .then(data => {
    res.json(data.rows)
    // console.log("222222", data.rows)
  })
  .catch(err => {
    res.status(500, "Could Not Complete Request")
  })
})


// POST route to submit a new note
router.post("/profile/create", (req, res) => {
  // console.log(req.body)
  db.query(
    `INSERT INTO posts (body, user_id) VALUES ($1, $2)`, [req.body.body, 1])
    .then(data => {
      res.json(data.rows)
    })
});


// DELETE route to delete a note
router.delete("/notes/delete/:id", (req, res) => {
  // console.log("DELETE QUERY", req.params)
  db.query(
    `DELETE FROM posts WHERE posts.id = $1`, [req.params.id])
  .then(data => {
    res.json(data.rows)
    console.log("DELETED", data.rows)
  })
})


module.exports = router;