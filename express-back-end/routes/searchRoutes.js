const express = require('express');
const app = express();
const pool = require('../lib/db')
const DBHELPER = require('../db/dbhelpers');
const {getAllSpecies} = DBHELPER(pool);
const router = express.Router()

module.exports = (pool) => {
const db = DBHELPER(pool);

  app.get("/garden", (req, res) => {
    console.log("garden test");
    getAllSpecies().then((rows) => {
      console.log(rows);
      res.status(200).json(rows);
    })
  });

  app.post("/garden", (req, res) => {
    console.log("garden test");
    getAllSpecies().then((rows) => {
      console.log(rows);
      res.status(200).json(rows);
    })
  });


  app.get("/garden/:id", (req, res) => {
    getUserPlants(id).then((rows) => {
      console.log(rows);
      res.status(200).json(rows);
    })
  });

  app.get("/wishlist/:id", (req, res) => {
    getWishlistForUser(id).then((rows) => {
      console.log(rows);
      res.status(200).json(rows);
    })
  })

  app.get("/tasks/:id", (req, res) => {
    getUserTasks(id).then((rows) => {
      console.log(rows);
      res.status(200).json(rows);
    })
  })

  return app;
}

  

  
  // router.get("/main/search", (req, res) => {
  //   const searchText = req.query.searchText;
  //   const searchType = req.query.searchType;
  //   const searchOrder = req.query.searchOrder;

  //   let orderBy = "difficulty_rating";

  //   if (searchOrder === "minDifficulty") {
  //     orderBy = "difficulty_rating";
  //   } else if (searchOrder === "byCommonName") {
  //     orderBy = "common_name";
  //   } else if (searchOrder === "minWater") {
  //     orderBy = "water_requirement_rating";
  //   } else if (searchOrder === "minSunlight") {
  //     orderBy = "sunlight_requirement_rating";
  //   }

  //   if (searchType === "maxDifficulty") {
  //     orderBy = "difficulty_rating DESC";
  //     if (isNaN(searchText)) {
  //       return res.status(400).send('Please enter a number.');
  //     } else {
  //       db.searchByMaxDifficulty(searchText, orderBy)
  //       .then((results) => {
  //         const templateVars = { species: results};
  //         res.render("index", templateVars);
  //       });
  //     }
  //   } else if (searchType === "minDifficulty") {
  //     if (isNaN(searchText)) {
  //       return res.status(400).send('Please enter a number.');
  //     } else {
  //       db.searchByMinDifficulty(searchText, orderBy)
  //       .then((results) => {
  //         const templateVars = { species: results };
  //         res.render("index", templateVars);
  //       });
  //     }

  //   if (searchType === "maxWater") {
  //     orderBy = "water_requirement_rating DESC";
  //     if (isNaN(searchText)) {
  //       return res.status(400).send('Please enter a number.');
  //     } else {
  //       db.searchByMaxWater(searchText, orderBy)
  //       .then((results) => {
  //         const templateVars = { species: results};
  //         res.render("index", templateVars);
  //       });
  //     }
  //   } else if (searchType === "minWater") {
  //     if (isNaN(searchText)) {
  //       return res.status(400).send('Please enter a number.');
  //     } else {
  //       db.searchByMinWater(searchText, orderBy)
  //       .then((results) => {
  //         const templateVars = { species: results };
  //         res.render("index", templateVars);
  //       });
  //     }
    
  //     if (searchType === "maxSunlight") {
  //       orderBy = "sunlight_requirement_rating DESC";
  //       if (isNaN(searchText)) {
  //         return res.status(400).send('Please enter a number.');
  //       } else {
  //         db.searchByMaxSunlight(searchText, orderBy)
  //         .then((results) => {
  //           const templateVars = { species: results};
  //           res.render("index", templateVars);
  //         });
  //       }
  //     } else if (searchType === "minSunlight") {
  //       if (isNaN(searchText)) {
  //         return res.status(400).send('Please enter a number.');
  //       } else {
  //         db.searchByMinSunlight(searchText, orderBy)
  //         .then((results) => {
  //           const templateVars = { species: results };
  //           res.render("index", templateVars);
  //         });
  //       }

  //   } else if (searchType === "byCommonName") {
  //     db.searchByName(searchText, orderBy)
  //     .then((results) => {
  //       const templateVars = { species: results };
  //       res.render("index", templateVars);
  //     });
     
  //   } else {
  //       db.getAllSpecies()
  //         .then(rows => {
  //           const templateVars = { species: rows };
  //           res.render("index", templateVars);
  //         })
  //       }
  //     });




    
//Ideas:
    //Integrate the front end to take mutliple search params
    //Have w drop down menu's, one for search type and one for order by










