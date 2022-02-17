const db = require('./index');

const getWishlist = () => {
  return db.query(`SELECT * FROM wishlist_plants JOIN user_plants ON wishlist_plants.plant_id=user_plants.id JOIN species ON user_plants.species_id=species.id;`)
    .then((res) => {
      console.log('res.rows[0]', res.rows[0]);
      return res.rows;
    })
    .catch((err) => {
      console.log('DB error fetching wishlist plants: ' + err.message);
    });
};

module.exports = {
  getWishlist
};
