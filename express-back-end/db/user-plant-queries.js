const db = require('./index');

const insertUserPlant = (data) => {

  const { species_id, user_id, nickname, location } = data;
  return db.query(
    `
      WITH inserted AS (
        INSERT INTO user_plants (species_id, user_id, nickname, location, created_at, updated_at) 
        VALUES ($1, $2, $3, $4, $5, null) 
        RETURNING *)
        SELECT * 
        FROM inserted 
        JOIN species 
        ON (inserted.species_id=species.species_id);
    `,
    [species_id, user_id, nickname, location, new Date()]
  )
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log('DB error inserting user plant: ' + err.message);
    });
};

module.exports = {
  insertUserPlant
};
