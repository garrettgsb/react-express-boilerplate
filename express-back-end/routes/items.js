const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  
  // BROWSE - view household decor page ==> GET /items
  router.get('/items', (req, res) => {

    db.query(`SELECT * FROM items;`)
      .then(data => {
        const items = data.rows;
        //console.log('the items are:', items)
        res.render('items', {items});
      })
      .catch(err => {
        res
          .status(500)
          .json({error: err.message});
      });
  });
  
  // READ - view specific item's page ==> GET /items/:id
  router.get('/items/:id', (req, res) => {

    db.query(`SELECT * FROM items WHERE id = $1`, [req.params.id])
      .then(data => {
        const item = data.rows[0];
        res.render('item show', {item});
      })
      .catch(err => {
        res
          .status(500)
          .json({error: err.message});
      });
  });

  // EDIT - Admin edit data ==> POST /items/:id
  router.post('/items/:id', (req, res) => {

    

  })
  
}