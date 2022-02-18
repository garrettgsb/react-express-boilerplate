const db = require('./index');

const insertUserPlant = (data) => {
  // eslint-disable-next-line camelcase
  const { species_id, user_id, nickname, location } = data;

  console.log('!!!!!!DATA IS', data);
  return db.query(
    `
      INSERT INTO user_plants (species_id, user_id, nickname, location, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, null) RETURNING *;
    `,
    // eslint-disable-next-line camelcase
    [species_id, user_id, nickname, location, new Date()]
  )
    .then((res) => {
      // console.log('res.rows[0]', res.rows[0]);
      return res.rows;
    })
    .catch((err) => {
      console.log('DB error inserting user plant: ' + err.message);
    });
};

module.exports = {
  insertUserPlant
};
