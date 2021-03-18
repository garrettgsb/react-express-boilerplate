const express = require('express');
// const router  = express.Router();
const app = express();
const DBHELPERS = require('../db/dbhelpers');


app.use(express.urlencoded({ extended: true }));

module.exports = (pool) => {
  const db = DBHELPER(pool);

//Get wishlist for user

app.get("/wishlist", (req, res) => {
const userID = req.params.user_id
  if (!userID) {
    return res.redirect("/main");
  }
  db.getWishlistForUser(userID)
    .then((wishlist) => {
      const templateVars = { wishlist };
      res.render("wishlist", templateVars);
    });
});

//Get garden for users

app.get("/garden", (req, res) => {
  const userID = req.params.user_id
  if (!userID) {
    return res.redirect("/main");
  }
  db.getUserPlants(userID)
    .then((plants) => {
      const templateVars = { plants };
      console.log(templateVars);
      res.render("plants", templateVars);

    });
});

//Add plant plant to wishlist or remove plant from wishlist

app.post("/:species_id/wishlist", (req, res) => {
  const userID = req.params.user_id
  const speciesID = req.params.species_id;

  if(!userID) {
   return res.redirect("/index");
  }

  db.isPlantOnWishlist(userID, speciesID)
  .then((result) => {


    if (result[0].exists) {
      db.removePlantFromWishList(userID, speciesID);
      return res.redirect("/api/users/wishlist")
    }

    db.addPlantToWishList(userID, speciesID)
    .then(() => {
      return res.redirect("/api/users/wishlist");
    });
  });
});

//Delete plant from garden

app.post("/plants/:plant_id/delete", (req, res) => {
  const userID = req.params.user_id;
  const plantID = req.params.plant_id;
  if (!userID) {
    res.redirect("/");
  }
  db.deletePlantFromGarden(userID, plantID)
    .then(() => {
      res.redirect("/api/users/garden");
    });
  });


  return app;

};



