const { pool } = require('./database');


const getReviewForm= () => {
  return pool.query(`SELECT thumbnail_photo_url, cover_photo_url, users.pic, users.first_name, users.last_name, adventures.id  FROM adventures
  JOIN users ON users.id = owner_id  
   WHERE adventures.id = $1;
  `, [2])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message
    });
}

const getMyAdventureReviews= () => {
  return pool.query(`SELECT * 
  FROM
  (SELECT adventure_reviews.*
   FROM adventures 
  JOIN users 
  ON users.id = owner_id 
  JOIN adventure_reviews
  ON adventures.id = adventure_id
  WHERE users.id = $1) sub
  JOIN users as u 
  ON u.id = sub.guest_id 
  ;`, [7])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message
    });
}

const addReview = () => {
  return pool.query(`INSERT INTO adventure_reviews (guest_id, adventure_id, reservation_id, rating, comment)
  VALUES ($1, $2, $3, $4, $5);
  `, [])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message
    });
}

const getMyReviews = () => {
  return pool.query(`SELECT users.pic, first_name, last_name, rating, comment 
  FROM users
  JOIN adventure_reviews on users.id = guest_id
  WHERE users.id = $1;
  `, [5])
  .then((response) => {
    return response.rows;
  })
  .catch((err) => {
    return err.message
  });
}



module.exports = { getReviewForm, addReview, getMyAdventureReviews, getMyReviews }