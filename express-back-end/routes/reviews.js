const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/api/reviews", (req, res) => {
    db.query(`SELECT * FROM reviews;`)
      .then(({ rows: reviews }) => {
        res.json(reviews);
      })
      .catch(err => {
        res.json({error: err.message});
      })
  });

  router.post("/", (req, res) => {
    const title = req.body.title;
    const comment = req.body.comment;
    const landlord_rating = req.body.landlord_rating;
    const recommend_to_friend = req.body.recommend_to_friend;
    const building_rating = req.body.building_rating;
    const area_rating = req.body.area_rating;
    const queryParams = [title, comment, landlord_rating, recommend_to_friend, building_rating, area_rating];

    const queryString = `INSERT INTO reviews (title, comment, landlord_rating, recommend_to_friend, building_rating, area_rating)
    VALUES ($1, $2, $3, $4 ,$5, $6) RETURNING *;`

    db.query(queryString, queryParams)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
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


const ratingsUrl = 'http://localhost:8080/api/reviews/area_ratings'
const { datas, errors } = useSwr(ratingsUrl, { fetcher });
const ratings = data && !errors ? datas.slice(0, 100) : [];
