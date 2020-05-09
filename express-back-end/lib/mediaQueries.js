const db = require('./db');

const getMedia = (id) => {
  return db.query(`
  SELECT *
  FROM media
  where id = $1;
  `, [id])
    .then(res => {
      return res.rows;
    });
};

module.exports.getMedia = getMedia;

const getMediaByTour = (tourId) => {
  return db.query(`
  SELECT *
  FROM media
  where tour_id = $1
  `, [tourId])
    .then(res => {
      return res.rows;
    });
};

module.exports.getMediaByTour = getMediaByTour;
