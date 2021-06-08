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

  router.get("/register", (req, res) => {
    res.render("render register component");
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

  //Edit a profile
  router.post("/:userId", (req, res) => {
    const queryParams = [];

    let queryString = `UPDATE users SET `;

    if (req.body.first_name) {
      queryParams.push(req.body.first_name);
      queryString += `first_name = $${queryParams.length}, `;
    }

    if (req.body.last_name) {
      queryParams.push(req.body.last_name);
      queryString += `last_name = $${queryParams.length}, `;
    }

    if (req.body.email) {
      queryParams.push(req.body.email);
      queryString += `email = $${queryParams.length}, `;
    }

    if (req.body.password) {
      queryParams.push(req.body.password);
      queryString += `password = $${queryParams.length}, `;
    }

    queryString = queryString.slice(0, queryString.length - 2);

    queryParams.push(req.params.id);
    queryString += `WHERE id = $${queryParams.length};`;

    db.query(queryString, queryParams)
      .then((data) => {
        const user = data.rows[0];
        res.redirect("/users/:userId");
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
