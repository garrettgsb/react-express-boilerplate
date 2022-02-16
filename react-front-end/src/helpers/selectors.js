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