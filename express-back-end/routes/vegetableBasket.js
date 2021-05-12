const Express = require('express');
const router = Express.Router();
const db = require('../db/lib/db');


router.get('/api/cart', (req, res) => {
  getCart().then(data => {
    res.json(data)
  })
});

const getCart = function () {
  return db.query(`SELECT * FROM veg_baskets 
  JOIN vegetables ON vegetables.id=veg_baskets.vegetable_id 
  JOIN users ON users.id=veg_baskets.users_id
  JOIN plots ON plots.id=veg_baskets.plots_id
  WHERE user_id=1`)
    .then(res => {
      return res.rows
    })
    .catch(err => console.log(err));
}

const addToBasket = function (state) {
  return router.put(`INSERT INTO veg_baskets (vegetable_id, user_id, plot_id)
  VALUES
  (${state.vegetables.id}, ${state.users.id}, ${state.plots.id})`)
}



// const buildGarden = function () {

//   return dbquery(`INSERT into from veg_baskets`)
// }


// router.get('/api/cart', (req, res) => {
//   getCart().then(data => {
//     res.json(data)
//   })
// });


module.exports = {router: router, addToBasket: addToBasket}