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
  JOIN users ON users.id=veg_baskets.user_id
  JOIN plots ON plots.id=veg_baskets.plot_id
  WHERE user_id=1`)
    .then(res => {
      return res.rows
    })
    .catch(err => console.log(err));
}


router.post('/api/cart', async(req, res) => {
  console.log('req', req.body)
  const veg_id = req.body.vegetableID
  const user_id = req.body.userID
  const plot_id = req.body.plotID
  // console.log('req.body'. req.body.plotID, req.body.userID, req.body.plotID)
  db.query(`INSERT INTO veg_baskets(vegetable_id, user_id, plot_id)
   VALUES($1,$2,$3)`, [veg_id, user_id, plot_id])
  .then(data => {
    res.status(200).send("inserted data yay!!")
  })
  .catch(err => console.log("error!", err))

//    router.put(`INSERT INTO veg_baskets (vegetable_id, user_id, plot_id)
//   VALUES
  // (${state.vegetables.id}, ${state.users.id}, ${state.plots.id})`)
})






// const buildGarden = function () {

//   return dbquery(`INSERT into from veg_baskets`)
// }


// router.get('/api/cart', (req, res) => {
//   getCart().then(data => {
//     res.json(data)
//   })
// });


module.exports = router