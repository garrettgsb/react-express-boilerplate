const { pool } = require('./database');


const getCategories = () => {
  return pool.query(`SELECT DISTINCT category FROM adventures;`)
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });
}

const placeholder = () => {
  return pool.query(`SELECT count(*) FROM adventures;`
  )
    .then(data => {
      const x = Math.floor(Math.random() * data.rows[0].count);
      return pool.query(`SELECT city FROM adventures where id = ${x};`)
    })
    .then(data => { return data.rows[0] })
}

const searchDestination = (search) => {
  return pool.query(`
    SELECT id, thumbnail_photo_url, title, description, count(adventures)
    FROM adventures 
    WHERE lower(city) LIKE lower(‘%$1%’) 
    OR lower(country) LIKE lower(‘%$1%’) 
    OR lower(province_state) LIKE lower(‘%$1%’;)
    `, [search])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return 'Hmm... It doesnt seem like we have that location. Try searching again or make your own listing!';
    });
}


module.exports = { getCategories, placeholder, searchDestination };

