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

  if (req.body.price) {
    queryParams.push(req.body.price);
    queryString += `price = $${queryParams.length}, `;
  }

  if (req.body.current_status) {
    queryParams.push(req.body.current_status);
    queryString += `current_status = $${queryParams.length}, `;
  }
  
  if (req.body.description) {
    queryParams.push(req.body.description);
    queryString += `description = $${queryParams.length}, `;
  }

  if (req.body.image) {
    queryParams.push(req.body.image);
    queryString += `image = $${queryParams.length}, `;
  }

  if (req.body.quantity) {
    queryParams.push(req.body.quantity);
    queryString += `quantity = $${queryParams.length}, `;
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
    
// ADD - admin add item  ==> POST /items
router.post('/items', (req, res) => {

  db.query(`INSERT INTO items (user_id, name, price, current_status, description, image, quantity)
   VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`,
  [req.session.user_id, req.body['item name'], req.body.price, req.body.current_status, req.body.description, req.body.image, req.body.quantity])
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

 // DELETE - admin delete item ===> POST /items/:id/delete
 router.post('items/:id/delete', (req, res) => {

  db.query(`DELETE FROM items WHERE id = $1;`,[req.params.id])
    .then(data => {
      res.redirect('/items');
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

return router;

};