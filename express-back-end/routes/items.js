const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  
  // BROWSE - view household decor page ==> GET /items
  router.get('/', (req, res) => {

    db.query(`SELECT * FROM items;`)
      .then(({ rows: items }) => res.json(items))
      .catch(err => {
        res
          .status(500)
          .json({error: err.message});
      });
  });
  
  // READ - view specific item's page ==> GET /items/:id
  router.get('/:id', (req, res) => {

    db.query(`SELECT * FROM items WHERE id = $1`, [req.params.id])
    .then(({ rows: item }) => res.json(item))
      .catch(err => {
        res
          .status(500)
          .json({error: err.message});
      });
  });


  // EDIT - admin edit data ==> POST /items/:id
  router.post('/:id', (req, res) => {

    const queryParams = [];

    let queryString = `UPDATE items SET `;

    if (req.body.name) {
      queryParams.push(req.body.name);
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
      .then((res) => res.rows[0])
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
    
  // ADD - admin add item  ==> POST /items
  router.post('/', (req, res) => {

    db.query(`INSERT INTO items (user_id, name, price, current_status, description, image, quantity)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`,
    [req.session.user_id, req.body['item name'], req.body.price, req.body.current_status, req.body.description, req.body.image, req.body.quantity])
      .then((res) => res.rows[0])
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // DELETE - admin delete item ===> POST /items/:id/delete
  router.delete('/:id', (req, res) => {

    db.query(`DELETE FROM items WHERE id = $1;`,[req.params.id])
    .then(() => res.redirect("/"))
      .catch(err => {
        res
          .status(204)
          .json({ error: err.message });
      });
  });

return router;

};