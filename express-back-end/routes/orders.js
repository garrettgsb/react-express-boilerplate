const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  
  // BROWSE - view completed order page ==> GET /orders   **ADMIN ONLY**
  router.get('/', (req, res) => {

    db.query(`SELECT * FROM orders;`)
      .then(data => {
        const orders = data.rows;
        //console.log('the items are:', items)
        res.render('orders', {orders});
      })
      .catch(err => {
        res
          .status(500)
          .json({error: err.message});
      });
  });
 
  // BROWSE - view completed order page ==> GET /orders   **SPECIFIC USER ONLY**
  router.get('/:userID', (req, res) => {

    db.query(`SELECT * FROM orders WHERE userID = $1;`)
      .then(data => {
        const orders = data.rows;
        //console.log('the items are:', items)
        res.render('orders', {orders});
      })
      .catch(err => {
        res
          .status(500)
          .json({error: err.message});
      });
  });

  

}
