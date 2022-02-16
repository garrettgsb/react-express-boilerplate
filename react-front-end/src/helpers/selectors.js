export function getPlantsForUser(plants, user_id) {
  // takes in an array of objects and returns a new array
  const user = Number(user_id);
  const filteredPlants = plants.filter(plant => plant.user_id === user);
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

export function getPlantByName(plants, scientific_name) {
  const plant = scientific_name;
  const foundPlant = plants.find(item => item.scientific_name === plant);
  return foundPlant;
}