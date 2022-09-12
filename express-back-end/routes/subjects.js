const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query("SELECT * FROM subjects;").then((result) => {
      res.send(result.rows);
    });
  });

  router.post("/", (req, res)=>{
    db.query(`
    INSERT INTO subjects (subject_name)
    VALUES ($1)
    RETURNING *;`, [req.body.subject])
    .then((result)=>{
      return res.send(result.rows);
    })
  })

  return router;
};
