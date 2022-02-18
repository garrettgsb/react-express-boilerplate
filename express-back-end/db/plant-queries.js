const db = require('./index');

const getPlants = () => {
  return db.query(`SELECT * FROM user_plants JOIN species ON user_plants.species_id=species.species_id;`)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log('DB error fetching plants: ' + err.message);
    });
};

module.exports = {
  getPlants
};
