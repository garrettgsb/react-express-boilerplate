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
    // Getting user credentials as a JSON file
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

    //Update an existing user
  router.put("/users/:id", (req, res) => {
    // Getting user info as a JSON file
    const { current_beans, lifetime_beans, tier, accelerator } = req.body;
    const queryParams = [
      current_beans,
      lifetime_beans,
      tier,
      accelerator,
      req.params.id,
    ];
    db.query(
      `UPDATE customer_information SET current_beans = $1,  lifetime_beans = $2,  tier = $3,  accelerator = $4 WHERE user_id = $5 RETURNING *;`,
      queryParams
    )
      .then((result) => { 
        if(result.rowCount < 1) {
          throw Error("user not found!")
        }
        res.json({ message: `user${req.params.id} updated!` })
    })
      .catch((err) => res.status(404).json({ error: err.message }));
  });


  return router;
};
