const express = require('express');
const router = express.Router();
const db = require('../lib/db');

// this route needs to be checked for the params, and how we can target the clicked mood to show the resources for the clicked mood only
router.get("/moods/:category", (req, res) => {
  // console.log("PARAMS CAT____", req.params)
  db.query(
    `SELECT * FROM resources WHERE resources.category = $1 ORDER BY id ASC;`, [req.params.category])
  .then(data => {
    res.json(data.rows)
    console.log("222222", data.rows)
  })
  .catch(err => {
    res.status(500, "Could Not Complete Request")
  })
})

// POST route to update/remove favourited resource from user
// router.post("/favourited", (req, res) => {
//   db.query(
//     `UPDATE`
//   )
// })

// router.get("/moods", (req, res) => {
//   db.query(
//     `SELECT DISTINCT resources.category FROM resources;`)
//   .then(data => {
//     res.json(data.rows)
//     console.log("mood data", data.rows)
//   })
//   .catch(err => {
//     res.status(500, "Could Not Complete Request")
//   })
// })


// do we need a router.post for moods clicked? is this something that react will just show/hide?



module.exports = router;