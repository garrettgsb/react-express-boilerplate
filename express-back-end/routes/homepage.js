const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) =>{
    console.log("Hello Home")

    db.query(
      'SELECT * FROM resources;'
    ).then(result => {
      res.send(result.rows)
    })


  })

  return router;
}