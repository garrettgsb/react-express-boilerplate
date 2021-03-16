const { promiseImpl } = require("ejs");

module.exports = (pool) => {
  const getUserPlants = function(userID) {
    return pool.query(`
    SELECT * FROM plants, species
    JOIN species ON species_id = species.id
    WHERE user_id = $1;`, [userID]
    )
    .then(res => {
      return res.rows;
    })
    .catch((error => {
      console.log("Error message", error)
    }));
  };

  const getAllSpecies = function () {
    return pool.query (`
    SELECT * FROM species`)
    .then(res => {
      return res.rows
    })
    .catch((error => {
      console.log("Error message", error)
    }));
  };

  const getWishlistForUser = function(userID) {
    return pool.query(`
    SELECT * FROM species, wishlist
    JOIN wishlist ON species_id = species.id
    WHERE user_id = $1;
    `, [userID])
    .then(res => {
      return res.rows;
    })
    .catch((error => {
      console.log("Error message", error)
    }));
  };

  const addPlantToWishlist = function(userID, speciesID) {
    return pool.query(`
    INSERT INTO wishlist (user_id, species_id)
    VALUES ($1, $2)
    RETURNING *;
    `, [userID, listingID])
  };

  const removePlantFromWishlist = function(userID, speciesID) {
    return pool.query(`
    DELETE FROM wishlist WHERE user_id = $1 AND species_id = $2;
    `, [userID, speciesID])
    .then(() => {
      console.log("Removed From Wishlist!")
    })
    .catch((err) => {
      console.log("Error!", err)
    })
  };

  const isPlantOnWishlist = function(userID, speciesID) {
    return pool.query(`
    SELECT EXISTS (SELECT 1 FROM wishlist
    WHERE user_id = $1 AND species_id = $2)`, [userID, listingID])
    .then(res => {
      return res.rows;
    }).catch(err => console.log(err));
  }

  const getUserTasks = function(userID) {
    return pool.query(`
    SELECT * FROM plants, wishlist
    JOIN wishlist ON species_id = species.id
    WHERE user_id = $1;
    `, [userID])
    .then(res => {
      return res.rows;
    })
    .catch((error => {
      console.log("Error message", error)
    }));
  };


  return {
    getUserPlants,
    getAllSpecies,
    getWishlistForUser,
    addPlantToWishlist,
    removePlantFromWishlist,
    isPlantOnWishlist
  };
}

//To Do: getUserTasks, getPlantTasks

// Possible to Do: getUsersDeadPlants, deletePlant, movePlantToGraveyard

