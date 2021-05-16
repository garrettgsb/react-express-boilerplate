const Express = require('express');
const router = Express.Router();
const db = require('../db/lib/db');
const moment = require('moment');


const getPlots = function () {
  return db.query(`SELECT * FROM plots`)
    .then(res => {
      return res.rows
    })
    .catch(err => console.log(err));
};

router.get('/api/plots_vegs', (req, res) => {
  getPlantedVeg().then(data => {
    res.json(data)
  })
});

router.post('/api/plots_vegs/', (req, res) => {
  const user_id = 1
  const vegetable_id = req.body.vegetableID 
  const plot_id = req.body.plotID
    try {
      db.query(`INSERT INTO plots_vegs(user_id, vegetable_id, plot_id)
      VALUES ($1, $2 ,$3) RETURNING *` ,[user_id, vegetable_id, plot_id])
      .then(data => {
        res.status(200).json(data.rows)
      })
      .catch(err => console.log("error!", err))
    } 
    catch(e) {
      console.error("error: ", e)
    }
});

// router.post('/api/plots_vegs/:id', (req, res) => {
//   const user_id = 1
//   const vegetable_id = req.body.vegetableID 
//   const plot_id = req.body.plotID
//   console.log('this is happening isntead')
//     try {
//       db.query(`INSERT INTO plots_vegs(user_id, vegetable_id, plot_id)
//       VALUES ($1, $2 ,$3) RETURNING *` ,[user_id, vegetable_id, plot_id])
//       .then(data => {
//         res.status(200).json(data.rows)
//       })
//       .catch(err => console.log("error!", err))
//     } 
//     catch(e) {
//       console.error("error: ", e)
//     }
// });

router.post('/api/plots', (req, res) => {
  const user_id = 1
  const dimensions_length = 100
  const dimensions_width = 100
  const location = "Kelowna"
    try {
      db.query(`INSERT INTO plots(user_id, dimensions_length, dimensions_width, location)
      VALUES ($1, $2 ,$3, $4) RETURNING *` ,[user_id, dimensions_length, dimensions_width, location])
      .then(data => {
        res.status(200).json(data.rows[0])
      })
      .catch(err => console.log("error!", err))
    } 
    catch(e) {
      console.error("error: ", e)
    }
});

// could clean up later to have all in one get. 
router.get('/api/plots', (req, res) => {
  getPlots().then(data => {
    res.json(data)
  })
});

router.get('/api/plots/:id', (req, res) => {
  const plotID = req.params.id
  return db.query(`SELECT * FROM vegetables 
    JOIN plots_vegs ON vegetables.id=plots_vegs.vegetable_id WHERE plot_id = $1::integer`, [plotID])
    .then(data => {
      // console.log('I am inside of the router.get', res.rows)
      res.status(200).json(data.rows)
    })
    .catch(err => console.log(err));
});

router.post('/api/plots_vegs/:id', (req, res) => {
  const plot_vegID = req.params.id
  // console.log('req.params.id', plot_vegID)
  const now = moment();
  // console.log('inside maintenance route ot update plant dated with', now)
  return db.query(`UPDATE plots_vegs 
    SET planted_date = $1::timestamp 
    WHERE plots_vegs.id = $2::integer
    RETURNING *`, [now, plot_vegID])
    .then (info => {
      return db.query(`SELECT * FROM vegetables 
      JOIN plots_vegs ON vegetables.id=plots_vegs.vegetable_id 
      WHERE plots_vegs.id=$1::integer 
      `, [plot_vegID])
    })
    .then(data => {
      // console.log('I am inside of the router.get', res.rows)
      res.status(200).json(data.rows)
      // console.log('data.rows', data.rows)
    })
    .catch(err => console.log(err));
});

const getPlantedVeg = function (req, res) {
  return db.query(`SELECT * FROM vegetables JOIN plots_vegs ON vegetables.id=plots_vegs.vegetable_id WHERE user_id = 1`)
    .then(res => {
      return res.rows
    })
    .catch(err => console.log(err));
};

module.exports = router;