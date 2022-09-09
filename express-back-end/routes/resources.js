const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/:id", (req, res) => {
    console.log('REQ>BODY', req.params)
    db.query("SELECT * FROM resources JOIN subjects ON subjects_id = subjects.id WHERE subject_name = $1;", [req.params.id])
      .then((result) => {
        res.send(result.rows);
      });
  });

  router.post("/", (req, res) => {
    console.log('req.body', req.body)
    db.query(`INSERT INTO resources (subjects_id, step_number, step_description, article_url, photo_url, video_url)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;`, [req.body.id, req.body.step, req.body.description, req.body.article, req.body.img, req.body.video])
      .then((result1) => {
        res.send(result1.rows);
      })
      .catch(err => {
        console.log('err', err)
      })
  })
  // });
  return router;
};
