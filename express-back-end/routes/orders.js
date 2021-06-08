const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  
  // BROWSE - view completed order page ==> GET /orders   **ADMIN ONLY**
  router.get('/', (req, res) => {

    db.query(`SELECT * FROM orders;`)
      .then(({ rows: orders }) => res.json(orders))
      .catch(err => {
        res
          .status(500)
          .json({error: err.message});
      });
  });
 
  // BROWSE - view completed order page ==> GET /orders   **SPECIFIC USER ONLY**
  router.get('/:userID', (req, res) => {

    db.query(`SELECT * FROM orders WHERE userID = $1`, [req.params.userId])
      .then(({ rows: orders }) => res.json(orders))
      .catch(err => {
        res
          .status(500)
          .json({error: err.message});
      });
  });

  // READ - view specific order ==> GET /orders/:id
  router.get('/:id', (req, res) => {

    db.query(`SELECT * FROM orders WHERE id = $1`, [req.params.id])
      .then(({ rows: order }) => res.json(order))
      .catch(err => {
        res
          .status(500)
          .json({error: err.message});
      });
  });

}
