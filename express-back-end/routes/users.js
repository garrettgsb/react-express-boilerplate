const router = require("express").Router();

module.exports = (db) => {
  //Register a User
  router.get("/users/register", (req, res) => {
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
