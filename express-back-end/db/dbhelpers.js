

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
    `, [userID, speciesID])
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

  const deletePlantFromGarden = function(userID, listingID) {
    return pool.query(`
    DELETE FROM listings WHERE seller_id = $1 AND id = $2;
    `, [userID, listingID])
  };

  //Search functions
  const searchByName = function(commonName, orderBy) {
    let queryString = `SELECT * FROM species WHERE common_name LIKE $1 ORDER BY `
    queryString += orderBy
    const values = [`%${commonName}%`]
    return pool.query(queryString, values)
    .then(res => {
      return res.rows;
    })
    .catch(err => console.error('query error', err.stack));
  };

  const searchByMinDifficulty = function(difficultyRating, orderBy) {
    let queryString = `SELECT * FROM species WHERE difficulty_rating >= $1 ORDER BY difficulty_rating`
    queryString += orderBy
    const values = [difficultyRating]
    return pool.query(queryString, values)
    .then(res => {
      return res.rows;
    })
    .catch(err => console.error('query error', err.stack));
  };

  const searchByMaxDifficulty = function(difficultyRating, orderBy) {
    let queryString = `SELECT * FROM species WHERE difficulty_rating <= $1 ORDER BY difficulty_rating DESC `
    queryString += orderBy
    const values = [difficultyRating]
    return pool.query(queryString, values)
    .then(res => {
      return res.rows;
    })
    .catch(err => console.error('query error', err.stack));
  };

  const searchByMinSunlight = function(sunlightRequirements, orderBy) {
    let queryString = `SELECT * FROM species WHERE sunlight_requirement_rating >= $1 ORDER BY sunlight_requirement_rating`
    queryString += orderBy
    const values = [sunlightRequirements]
    return pool.query(queryString, values)
    .then(res => {
      return res.rows;
    })
    .catch(err => console.error('query error', err.stack));
  };

  const searchByMaxSunlight = function(sunlightRequirements, orderBy) {
    let queryString = `SELECT * FROM species WHERE sunlight_requirement_rating <= $1 ORDER BY sunlight_requirement_rating DESC`
    queryString += orderBy
    const values = [sunlightRequirements]
    return pool.query(queryString, values)
    .then(res => {
      return res.rows;
    })
    .catch(err => console.error('query error', err.stack));
  };

  const searchByMinWater = function(waterRequirements, orderBy) {
    let queryString = `SELECT * FROM species WHERE water_requirement_rating >= $1 ORDER BY water_requirement_rating`
    queryString += orderBy
    const values = [waterRequirements]
    return pool.query(queryString, values)
    .then(res => {
      return res.rows;
    })
    .catch(err => console.error('query error', err.stack));
  };

  const searchByMaxWater = function(waterRequirements, orderBy) {
    let queryString = `SELECT * FROM species WHERE water_requirement_rating <= $1 ORDER BY water_requirement_rating DESC`
    queryString += orderBy
    const values = [waterRequirements]
    return pool.query(queryString, values)
    .then(res => {
      return res.rows;
    })
    .catch(err => console.error('query error', err.stack));
  };
  

  return {
    getUserPlants,
    getAllSpecies,
    getWishlistForUser,
    addPlantToWishlist,
    removePlantFromWishlist,
    isPlantOnWishlist,
    getUserTasks,
    deletePlantFromGarden,
    searchByName,
    searchByMinDifficulty,
    searchByMaxDifficulty,
    searchByMinSunlight,
    searchByMaxSunlight,
    searchByMinWater,
    searchByMaxWater,
  };
}

//To Do: getUserTasks, getPlantTasks

// Possible to Do: getUsersDeadPlants, deletePlant, movePlantToGraveyard

