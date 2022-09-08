const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/resources", (req, res) => {
    db.query("SELECT * FROM resources;").then((result) => {
      res.send(result.rows);
    });
  });

  router.post("/resources", (req, res) => {
    db.query(`
    INSERT INTO subjects (subject_name)
    VALUES ($1)
    RETURNING *;`, [req.body.subject])
    .then((result) => {
      console.log(result.rows[0])
      const id = result.rows[0].id
      db.query(`INSERT INTO resources (subjects_id, step_number, step_description, article_url, photo_url, video_url)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;`, [id, 1, req.body.description, req.body.article, req.body.img, req.body.video])
      .then((result1)=>{
        return res.send(result1.rows);
      })

    })
    .catch(err=>{
      console.log('err', err)
    })
  });
  return router;
};
