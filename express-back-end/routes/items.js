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

    db.query(`SELECT * FROM items WHERE id = $1`,[req.params.id])
    .then(data => {
      const item = data.rows[0];
      res.render('item_show', {item, userID:item.user_id});
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// EDIT - admin edit data ==> POST /items/:id
router.post('items/:id', (req, res) => {

  const queryParams = [];

  let queryString = `UPDATE items SET `;

  if (req.body['item name']) {
    queryParams.push(req.body['item name']);
    queryString += `name = $${queryParams.length}, `;
  }

  if (req.body.description) {
    queryParams.push(req.body.description);
    queryString += `description = $${queryParams.length}, `;
  }

  if (req.body.price) {
    queryParams.push(req.body.price);
    queryString += `price = $${queryParams.length}, `;
  }

  if (req.body.photo_url) {
    queryParams.push(req.body.photo_url);
    queryString += `photo_url = $${queryParams.length}, `;
  }

  if (req.body.sold) {
    queryParams.push(req.body.sold);
    queryString += `sold = $${queryParams.length}, `;
  }

  queryString = queryString.slice(0, queryString.length - 2);

  queryParams.push(req.params.id);
  queryString += `WHERE id = $${queryParams.length};`;

  db.query(queryString, queryParams)
    .then(data => {
      const items = data.rows[0];
      res.redirect('/items');
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
    


  
}