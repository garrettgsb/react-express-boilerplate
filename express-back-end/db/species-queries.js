const db = require('./index');

const getSpecies = () => {
  return db.query(`SELECT * FROM species`)
    .then((res) => {
      // console.log('res.rows[0]', res.rows[0]);
      return res.rows;
    })
    .catch((err) => {
      console.log('DB error fetching species: ' + err.message);
    });
};

module.exports = {
  getSpecies
};
