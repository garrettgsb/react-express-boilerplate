const Express = require('express');
const router = Express.Router();
const db = require('../db/lib/db');

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
  console.log('/plots_vegs/add', req.body.vegetableID)
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


router.post('/api/plots', (req, res) => {
  const user_id = 1
  const dimensions_length = 100
  const dimensions_width = 100
  const location = "Kelowna"
  console.log('plot/add', req.body)
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


router.get('/api/plots/:plotId', (req, res) => {
  getPlantedVeg().then(data => {
    res.json(data)
  })
});



// get plots_vegs table.
const getPlotsVegs = function () {
  return db.query(`SELECT * FROM plots_vegs`)
    .then(res => {
      return res.rows
    })
    .catch(err => console.log(err));
}

// change where userid too... where plots.id === res
// get planted veggies per plot.
const getPlantedVeg = function () {
  return db.query(`SELECT * FROM vegetables JOIN plots_vegs ON vegetables.id=plots_vegs.vegetable_id WHERE user_id=1`)
    .then(res => {
      return res.rows
    })
    .catch(err => console.log(err));
}




// get tasks per plots_vegs.
// const getPlotTasks = function() {
//   return db.query(`SELECT name, image_url, water_time FROM vegetables JOIN plots_vegs ON vegetables.id=plots_vegs.vegetable_id`)
//   .then(res => {
//     return res.rows
//   })
//   .catch(err => console.log(err));
// }

// router.get('/api/:plotId', (req, res) => {
//   getPlantedVeg().then(data =>{
//     res.json(data)
//   })
// }); 


module.exports = router;