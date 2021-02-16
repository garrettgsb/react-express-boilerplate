const router = require("express").Router();

// READ GET /users/:id  "Home Screen (Logged in User"

module.exports = (db) => {
  // Get a specific user with id and type customer by default
  router.get("/users/:id", (req, res) => {
    const queryParams = [req.params.id];
    db.query(
      `SELECT * FROM users JOIN customer_information on users.id = customer_information.user_id WHERE users.id = $1`,
      queryParams
    )
      .then((result) => {
        result.rows.length
          ? res.json(result.rows)
          : res.json({
              message: `no customer found with id: ${req.params.id}`,
            });
      })
      .catch((err) => res.status(401).json({ error: err.message }));
  });

  // Create a new user
  router.post("/users/", (req, res) => {
    // Getting user credintials as a JSON file
    const { username, password, phoneNumber, type } = req.body;
    if (username && password && phoneNumber && type) {
      const queryParams = [username, password, phoneNumber, type];
      db.query(
        `INSERT INTO users (username, password, phone_number, type) VALUES ($1, $2, $3, $4);`,
        queryParams
      )
        .then(() => res.json({ message: "user added!" }))
        .catch((err) => res.status(401).json({ error: err.message }));
    } else {
      // error if any credential is missed
      res.json({ error: "Invalid Input!!" });
    }
  });

  return router;
};
