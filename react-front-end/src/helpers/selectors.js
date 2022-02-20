export function getPlantsForUser(plants, user_id) {
  // takes in an array of objects and returns a new array
  const user = Number(user_id);
  const filteredPlants = plants.filter(plant => plant.user_id === user);
  return filteredPlants;
}
// Get plants by room for dashboard
export function getPlantsByRoom(plants, location) {
  const filteredPlants = plants.filter(plant => plant.location === location);
  return filteredPlants;
}

export function getUserById(users, user_id) {  
  const user = Number(user_id);
  const foundUser = users.find(item => item.id === user);
  return foundUser;
}

export function getPlantById(plants, plant_id) {
  const plant = Number(plant_id);
  const foundPlant = plants.find(item => item.id === plant);
  return foundPlant;
}

export function getPlantByName(species, scientific_name) {
  const foundPlant = species.find(item => item.scientific_name === scientific_name);
  return foundPlant;
}

// Returns an array of wishlist objects for a specific user
export function getWishlistPlants(wishlist, user_id) {
  const userId = Number(user_id);

  const arr = [];
  wishlist.forEach(item => {
    if (item.wishlist_user_id === userId) {
      arr.push(item);
    }
  });
  console.log('arr is', arr);
  return arr;
}

export function getSpeciesById(species, species_id) { // takes array of species objects and returns one object with that species_id
  const foundSpecies = species.find(s => s.species_id === species_id); // takes a species_id and returns the species object
  return foundSpecies;
};