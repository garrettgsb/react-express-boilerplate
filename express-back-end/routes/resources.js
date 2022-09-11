const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/:id", (req, res) => {
    console.log('REQ>BODY', req.params)
    db.query("SELECT resources.* FROM resources JOIN subjects ON subjects_id = subjects.id WHERE subject_name = $1 ORDER BY step_number ASC;", [req.params.id])
      .then((result) => {
        console.log('ROWS FOR', req.params.id, result.rows)
        res.send(result.rows);
      });
  });

  //to have a view on resources route
  router.get('/', (req, res)=>{
    db.query('SELECT * FROM resources ORDER BY step_number ASC;').then((result) => {
      console.log('RES.ROWS', result.rows)
      res.send(result.rows);
    });
  })

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

  router.delete("/:id", (req, res) =>{
    console.log('deleting', req.params.id)
    // if (deleting) {
      const id = req.params.id
      db.query(`DELETE FROM resources WHERE id = ${id} RETURNING *;`)
      .then((result) =>{
        res.send(result.rows);
      })
    // }
  });
  router.put('/:id', (req, res) => {
    const id = req.params.id
    db.query(`UPDATE resources SET step_description=$1, article_url=$2, photo_url=$3, video_url=$4 WHERE id = ${id} RETURNING *;`, [req.body.description, req.body.article, req.body.img, req.body.video])
    .then(() => {
      db.query('SELECT * FROM resources ORDER BY step_number ASC;').then (response => {
        console.log('res.res API', res.rows)
        res.send(response.rows);
      })
    })
  })

  return router;
};
