const Express = require('express');
const router = Express.Router();
const db = require('../db/lib/db');


const getCart = function () {
  return db.query(`SELECT vegetables.name, vegetables.id, vegetables.avatar_url FROM veg_baskets 
  JOIN users ON users.id=veg_baskets.user_id
  JOIN vegetables ON vegetables.id=veg_baskets.vegetable_id 
  WHERE user_id=1`)
    .then(res => {
      return res.rows
    })
    .catch(err => console.log(err));
}


router.get('/api/cart', (req, res) => {
  getCart().then(data => {
    res.json(data)
  })
});

// /api/cart
router.post('/api/cart', (req, res) => {
  console.log('req', req.body)
  const veg_id = req.body.vegetableID
  const user_id = req.body.userID
  try {
    db.query(`INSERT INTO veg_baskets(vegetable_id, user_id)
     VALUES($1,$2)`, [veg_id, user_id])
      .then(data => {
        // console.log("data", data);
        res.status(200).send("inserted data yay!!")
      })
      .catch(err => console.log("error!", err))

  } catch (e) {
    console.error("error: ", e)

  }
  // console.log('req.body'. req.body.plotID, req.body.userID, req.body.plotID)

//    router.put(`INSERT INTO veg_baskets (vegetable_id, user_id)
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