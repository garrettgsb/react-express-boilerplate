const db = require('./db');

const getTours = () => {
  return db.query(`
  SELECT *
  FROM tours;
  `)
    .then(res => {
      return res.rows;
    });
};

module.exports.getTours = getTours;

const getTour = (id) => {
  return db.query(`
  SELECT *
  FROM tours
  WHERE id = $1;
  `, [id])
    .then(res => {
      return res.rows[0];
    });
};

module.exports.getTour = getTour;

const getToursByCity = (city) => {
  return db.query(`
  SELECT *
  FROM tours
  WHERE city = $1;
  `, [city])
    .then(res => {
      return res.rows[0];
    });
};

module.exports.getToursByCity = getToursByCity;
