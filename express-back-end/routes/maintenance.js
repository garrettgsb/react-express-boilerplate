const Express = require('express');
const router  = Express.Router();
const db = require('../db/lib/db');

//could clean up later to have all in one get. 
  router.get('/api/plots', (req, res) => {
    getPlots().then(data =>{
      console.log('data',data)
      res.json(data)
    })
  }); 
  
  const getPlots = function() {
    return db.query(`SELECT * FROM plots `)
      .then(res => {
        return res.rows
      }).catch(err => console.log(err));
  };  

module.exports = router;