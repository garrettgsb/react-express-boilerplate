const express = require("express");
const router = express.Router();

// DB queries
const db = require("../db/database");

// Get request for all users
// users = all users - action taken
router.get("/users/:id/all", (req, res) => {
  const userId = req.params.id;
  const query = `
    With matching_seen_cte as (
      SELECT to_user_id
      FROM matchings
      WHERE from_user_id = $1 
      AND like_value is not null
    ),
    photos as (
      SELECT user_photos.user_id, array_agg(user_photos.url) photos FROM user_photos GROUP BY user_photos.user_id
    )
    SELECT 
      users.id, users.name, users.email, users.age, users.bio, genders.value AS gender, users.location, users.height_in_cm, users.education, users.occupation, drinks.value AS drinks, exercises.value AS exercises, dating_goals.value as goal, users.is_active, photos
    FROM 
      users 
    LEFT JOIN 
      matching_seen_cte 
    ON 
      users.id = matching_seen_cte.to_user_id
    LEFT JOIN 
      photos 
    ON 
      users.id = photos.user_id
    LEFT JOIN genders ON users.gender_id = genders.id
    LEFT JOIN drinks ON users.drink_id = drinks.id
    LEFT JOIN exercises ON users.exercise_id = exercises.id
    LEFT JOIN dating_goals ON users.dating_goal_id = dating_goals.id
    WHERE 
      users.id != $1
    AND users.id not in (
        select distinct to_user_id
        from matching_seen_cte)
    GROUP BY
      users.id,
      photos.photos,
      genders.value,
      drinks.value,
      exercises.value,
      dating_goals.value;
  `;
  return db
    .query(query, [userId])
    .then(({ rows: users }) => {
      res.json(users);
    })
    .catch((error) => console.log("err:", error));
});

// Get request to get your user object
router.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const query = `
  SELECT users.id, users.name, users.email, users.password, users.bio, users.age, users.is_active, genders.value AS Gender, drinks.value AS Drink, exercises.value AS Exercise, dating_goals.value AS Goal, user_photos.url AS Profile_photo
      FROM users
      LEFT JOIN genders ON users.gender_id = genders.id
      LEFT JOIN drinks ON users.drink_id = drinks.id
      LEFT JOIN exercises ON users.exercise_id = exercises.id
      LEFT JOIN dating_goals ON users.dating_goal_id = dating_goals.id
      LEFT JOIN user_photos ON user_photos.user_id = users.id
      WHERE users.id = $1 AND user_photos.is_profile is TRUE;
  `;
  return db
    .query(query, [userId])
    .then(({ rows: user }) => {
      res.json(user);
    })
    .catch((error) => console.log("err:", error));
});

// Get request for all msgs sent by yourself
router.get("/users/:id/messages", (req, res) => {
  const userId = req.params.id;
  const query = `
    SELECT * FROM messages
    WHERE from_user_id = $1;
  `;
  return db
    .query(query, [userId])
    .then(({ rows: messages }) => {
      res.json(messages);
    })
    .catch((error) => console.log("err:", error));
});

// get request for everyone who liked you
router.get("/users/:id/likedBy", (req, res) => {
  const userId = req.params.id;
  const query = `
    SELECT from_user_id FROM matchings
    WHERE to_user_id = $1;
  `;
  return db
    .query(query, [userId])
    .then(({ rows: likedBy }) => {
      res.json(likedBy);
    })
    .catch((error) => console.log("err", error));
});

router.post("/users/:id/blocked", (req, res) => {
  const userId = req.params.id;
  const { blockId } = req.body;
  const query = `
    INSERT INTO block_users
      (blocked_by_user_id, blocked_user_id)
    VALUES 
      ($1, $2)
    RETURNING *;
  `;
  return db
    .query(query, [userId, blockId])
    .then(({ rows: newMatching }) => {
      res.json(newMatching);
    })
    .catch((error) => console.log("err:", error));
});

// Get request for list of confirmed matches for a user
router.get("/users/:id/matchings", (req, res) => {
  const userId = req.params.id;
  const query = `
    WITH matched_users AS (
    SELECT
      A.from_user_id,
      A.to_user_id
    FROM
    matchings A, matchings B
    WHERE 
      A.from_user_id = B.to_user_id 
      AND A.to_user_id = B.from_user_id 
      AND A.like_value
      AND B.like_value
      AND A.from_user_id = $1
    )
    SELECT DISTINCT
      users.id,
      users.name,
      user_photos.url
    FROM 
      matched_users
    INNER JOIN users 
      ON users.id = matched_users.to_user_id
    INNER JOIN user_photos
      ON user_photos.user_id = matched_users.to_user_id
    LIMIT 1;
  `;
  return db
    .query(query, [userId])
    .then(({ rows: match }) => {
      res.json(match);
    })
    .catch((error) => console.log("err:", error));
});

// Post request on each swipe
// 8/5 - works
router.post("/users/:id/matchings", (req, res) => {
  const userId = req.params.id;
  const { toId, like } = req.body;
  const query = `
    INSERT INTO matchings
      (from_user_id, to_user_id, like_value, seen, matched_date)
    VALUES 
      ($1, $2, $3, true, CURRENT_TIMESTAMP)
    RETURNING *;
  `;
  return db
    .query(query, [userId, toId, like])
    .then(({ rows: newMatching }) => {
      res.json(newMatching);
    })
    .catch((error) => console.log("err:", error));
});

// get request to get users preferences
router.get("/users/:id/preferences", (req, res) => {
  const userId = req.params.id;
  const query = `
    SELECT * FROM preferences
    WHERE user_id = $1;
  `
  return db.query(query, [userId])
    .then(({ rows: userPreferences }) => {
      res.json(userPreferences[0]);
    })
    .catch((error) => console.log("err:", error));
});

// Post request to update user's preferences in db
router.post("/users/:id/preferences", (req, res) => {
  const userId = req.params.id;
  const preferences = req.body;
  const query =`
  UPDATE preferences
  SET min_age = $1,
      max_age = $2,
      location = $3,
      min_height_in_cm = $4,
      max_height_in_cm = $5,
      gender_id = $6,
      drink_id = $7,
      exercise_id = $8,
      dating_goal_id =$9 
  WHERE user_id = $10
  RETURNING *;
  `;
  return db
    .query(query, [preferences.min_age, preferences.max_age, preferences.location, preferences.min_height_in_cm, preferences.max_height_in_cm, preferences.gender_id, preferences.drink_id, preferences.exercise_id, preferences.dating_goal_id, userId])
    .then(({rows: userPreferences}) => {
      res.json(userPreferences[0]);
    })
    .catch(error => console.log("error:", error))
});

module.exports = router;
