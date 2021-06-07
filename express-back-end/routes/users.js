const router = require("express").Router();

module.exports = (db) => {
  //Get a User
  router.get("/:userId", (req, req) => {
    db.query(
      `
        SELECT * 
        FROM users
        WHERE id = $1
      `,
      [userId]
    )
      .then(({ rows: user }) => res.json(user))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //Register a User
  router.post("/register", (req, res) => {
    db.query(
      `
        INSERT into users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)
        RETURNING *
      `,
      [firstName, lastName, email, password]
    )
      .then((res) => res.rows[0])
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
