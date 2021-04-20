const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  // Gets all reviews
  router.get("/api/reviews", (req, res) => {
    db.query(`SELECT * FROM reviews;`)
      .then(({ rows: reviews }) => {
        res.json(reviews);
      })
      .catch(err => {
        res.json({error: err.message});
      })
  });

  // Gets all reviews for a specific building
  router.get("/api/reviews/:building_id", (req, res) => {
    const params = [req.params.building_id]
    // const query = `SELECT * FROM reviews WHERE building_id = $1`;
    const query = `SELECT reviews.id AS review_id, reviews.user_id AS user_id, reviews.area_id AS area_id, reviews.building_id AS building_id, reviews.title AS title, reviews.building_rating AS building_rating, reviews.comment AS comment, reviews.landlord_rating AS landlord_rating, reviews.recommend_to_friend AS recommend_to_friend, users.username AS username
    FROM users
    JOIN reviews ON users.id = reviews.user_id
    WHERE building_id = $1
    ORDER BY reviews.id DESC
    LIMIT 10`
    db.query(query, params)
    .then(data => {
      res.json(data.rows);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });

  // Adds a new review
  router.post("/api/reviews", (req, res) => {
    const title = req.body.title;
    const comment = req.body.comment;
    const landlord_rating = req.body.landlord_rating;
    const recommend_to_friend = req.body.recommend_to_friend;
    const building_rating = req.body.building_rating;
    const area_rating = req.body.area_rating;
    const building_id = req.body.building_id
    const user_id = req.body.user_id
    const queryParams = [title, comment, landlord_rating, recommend_to_friend, building_rating, area_rating, building_id, user_id];

    const queryString = `INSERT INTO reviews (title, comment, landlord_rating, recommend_to_friend, building_rating, area_rating, building_id, user_id)
    VALUES ($1, $2, $3, $4 ,$5, $6, $7, $8) RETURNING *;`

    db.query(queryString, queryParams)
    .then(result => {
      res
        .status(200)
        .json(result.rows[0]);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  })

  // Updates a review
  router.put("/api/reviews/:review_id", (req, res) => {
    console.log('Req session from reviews edit route', req.body)
    const review_id = req.body.review_id;
    const title = req.body.title;
    const comment = req.body.comment;
    const landlord_rating = req.body.landlord_rating;
    const recommend_to_friend = req.body.recommend_to_friend;
    const building_rating = req.body.building_rating;
    const area_rating = req.body.area_rating;
    const building_id = req.body.building_id;
    const user_id = req.body.user_id;
    
    const queryParams = [review_id, title, comment, landlord_rating, recommend_to_friend, building_rating, area_rating, building_id, user_id];

    const queryString = `UPDATE reviews SET title = $2, comment = $3, landlord_rating = $4, recommend_to_friend = $5, building_rating = $6, area_rating = $7 building_id = $8, user_id = $9 WHERE id = $1 RETURNING *;`
    // UPDATE reviews SET title = 'Do you work', comment = 'Hello Wrold', landlord_rating = false, recommend_to_friend = false, building_rating = 5, area_rating = 5, building_id = 6, user_id = 11 WHERE id = 174 RETURNING *;
    db.query(queryString, queryParams)
    .then(result => {
      res
        .status(200)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  })

  // Deletes a review
  router.delete("/api/reviews/:id", (req, res) => {
    db.query(`DELETE FROM reviews WHERE reviews.id = $1`,[req.params.id])
      .then(({ rows: review }) => res.json(review))
  })


  // Gets average area rating by area name
  router.get("/api/reviews/area_ratings", (req, res) => {
    const queryString = `
      SELECT areas.name AS area_name, ROUND(AVG(area_rating),0) AS average_area_rating
      FROM reviews
      JOIN areas ON area_id = areas.id
      GROUP BY areas.name
      ORDER BY average_area_rating DESC;
    `
    db.query(queryString) 
    .then(({ rows: reviews }) => {
      res.json(reviews);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  })

  return router;
};

// SELECT reviews.id AS review_id, reviews.user_id AS user_id, reviews.area_id AS area_id, reviews.building_id AS building_id, reviews.title AS title, reviews.building_rating AS building_rating, reviews.comment AS comment, reviews.landlord_rating AS landlord_rating, reviews.recommend_to_friend AS recommend_to_friend, users.username AS username
//     FROM users
//     JOIN reviews ON users.id = reviews.user_id
//     WHERE building_id = 6
//     ORDER BY reviews.id DESC
//     LIMIT 10