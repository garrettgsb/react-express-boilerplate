const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    console.log("REQ BODY", req.body)
    const sql = `SELECT * FROM users;
    `
    db.query(sql)
    .then((results) => {
      res.send(results.rows)
      console.log("INSERT RESULT ROWS", results.rows)
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
  })

  router.post("/login", (req, res) => {
    console.log(req.body);

    const sql = `SELECT * FROM users
    WHERE email = '${req.body.email}' AND password = '${req.body.password}';
    `
    db.query(sql)
    .then((results) => {
      if(results.rows.length > 0) {
        res.status(200).json(results.rows[0])
      } else {
        res.sendStatus(401)
      }
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
  })
  
  router.get("/crawls", (req, res) => {
    console.log("CRAWLS REQ BODY", req.body)
    const sql = `
    SELECT *
      FROM venues
      JOIN crawls ON crawl_id = crawls.id
      JOIN users ON user_id = users.id
    `
    db.query(sql)
    .then((results) => {
      res.send(results.rows)
      console.log("ROWS", results.rows)
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
  })

  return router;
};