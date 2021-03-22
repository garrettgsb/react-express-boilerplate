
module.exports = (pool) => {

  const getUserPlants = function(userID) {
    return pool.query(`
    SELECT plants.id as id, user_id, species_id, nickname, description, scientific_name, is_dead, common_name, photo_url, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets
    FROM plants
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
    SELECT * FROM wishlist
    JOIN species ON species_id = species.id
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
    SELECT * FROM tasks
    JOIN plants ON plant_id = plants.id
    JOIN species ON species_id = species.id
    WHERE tasks.user_id = $1;
    `, [userID])
    .then(res => {
      return res.rows;
    })
    .catch((error => {
      console.log("Error message", error)
    }));
  };

  const addPlantToGarden = function(userID, speciesID, nickname) {
    return pool.query(`
    INSERT INTO plants (user_id, species_id, nickname)
    VALUES ($1, $2, $3)
    RETURNING *;
    `, [userID, speciesID, nickname])
  };

  const movePlantToGraveyard = function(plantID) {
    return pool.query(`
      UPDATE plants
      SET is_dead = true
      WHERE id = $1;
    `, [plantID])
  };

  const deletePlantFromGarden = function(userID, listingID) {
    return pool.query(`
    DELETE FROM listings WHERE seller_id = $1 AND id = $2;
    `, [userID, listingID])
  };

  const randomUserID = () => {
    return Math.floor(Math.random() * 3) + 1;
  };

  return {
    getUserPlants,
    getAllSpecies,
    getWishlistForUser,
    addPlantToWishlist,
    removePlantFromWishlist,
    isPlantOnWishlist,
    getUserTasks,
    addPlantToGarden,
    movePlantToGraveyard,
    deletePlantFromGarden,
    randomUserID,
  };
}



