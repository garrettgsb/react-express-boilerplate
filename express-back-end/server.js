const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
// const PORT = 8080;
const PORT = 3003;
const db = require("./lib/db");

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

// ------------------------------------- USERS

App.get("/api/users", (req, res) => {
  const data = db.query("SELECT * FROM users").then((response) => {
    res.json({
      users: response.rows,
    });
  });
});

// THIS GETS A USERs ARTWORKS
App.get("/api/users/:id", (req, res) => {
  const data = db
    .query(
      `
    SELECT * 
    FROM users 
    JOIN artworks ON users.id = author_id
    WHERE users.id = $1;
    `,
      [req.params.id]
    )
    .then((response) => {
      res.json({
        portfolio: response.rows,
      });
    });
});

// ------------------------------------- ARTWORKS

App.get("/api/artworks", (req, res) => {
  const data = db.query("SELECT * FROM artworks").then((response) => {
    res.json({
      artworks: response.rows,
    });
  });
});

App.put("/api/artworks", (req, res) => {
  console.log(req.body);
  const { id, title, imgLink, projectLink, description, forSale, price } =
    req.body;
  const data = db
    .query(
      `INSERT INTO artworks (author_id, title, img_link, project_link, descrip, for_sale, price) VALUES ($1, $2, $3, $4, $5, $6, $7);`,
      [id, title, imgLink, projectLink, description, forSale, price]
    )
    .then((response) => {
      res.json({
        artworks: response.rows,
      });
    });
});

App.delete("/api/artworks/:id", (req, res) => {
  const { id } = req.params;
  const data = db
    .query(`DELETE FROM artworks WHERE id = $1;`, [id])
    .then((response) => {
      res.json({
        artworks: response.rows,
      });
    });
});

// ------------------------------------- FRIENDS

App.get("/api/friends/:id", (req, res) => {
  // const data = db.query("SELECT * FROM friends WHERE sender_id = $1 OR receiver_id = $1",[req.params.id]).then((response) => {
  const data = db
    .query(
      `SELECT 
      first_user.username as first_username,
      first_user.id as first_id,
      first_user.first_name as first_fname,
      first_user.last_name as first_lname, 
      second_user.username as second_username,
      second_user.id as second_id,
      second_user.first_name as second_fname,
      second_user.last_name as second_lname
      FROM friends
      JOIN users first_user ON first_user_id = first_user.id
      JOIN users second_user ON second_user_id = second_user.id
      WHERE first_user_id = $1 OR second_user_id = $1;`,
      [req.params.id]
    )
    .then((response) => {
      res.json({
        friends: response.rows,
      });
    });
});
App.put("/api/friends/", (req, res) => {
  // const data = db.query("SELECT * FROM friends WHERE sender_id = $1 OR receiver_id = $1",[req.params.id]).then((response) => {
  const { first_user_id, second_user_id } = req.body;
  const data = db
    .query(
      `INSERT INTO friends (first_user_id, second_user_id) VALUES ($1, $2);`,
      [first_user_id, second_user_id]
    )
    .then((response) => {
      res.json({
        friends: response.rows,
      });
    });
});

// ------------------------------------- JOBS

App.get("/api/jobs", (req, res) => {
  const data = db
    .query(
      `SELECT jobs.id AS id, user_id, username, title, description, pay, company, location FROM jobs JOIN users ON users.id = user_id;`
    )
    .then((response) => {
      res.json({
        jobs: response.rows,
      });
    });
});

// THIS GETS A USERs JOBS
App.get("/api/jobs/:id", (req, res) => {
  const data = db
    .query(
      `
    SELECT * 
    FROM users 
    JOIN jobs ON users.id = user_id
    WHERE users.id = $1;
    `,
      [req.params.id]
    )
    .then((response) => {
      res.json({
        userJobs: response.rows,
      });
    });
});

App.put("/api/jobs", (req, res) => {
  const { title, description, pay, company, location, id } = req.body;
  const data = db
    .query(
      `INSERT INTO jobs (title, description, pay, company, location, user_id) VALUES ($1, $2, $3, $4, $5, $6);`,
      [title, description, pay, company, location, id]
    )
    .then((response) => {
      res.json({
        jobs: response.rows,
      });
    });
});

// THIS GETS A USERs JOBS
App.get("/api/jobs/:id", (req, res) => {
  const data = db
    .query(
      `
    SELECT * 
    FROM users 
    JOIN jobs ON users.id = user_id
    WHERE users.id = $1;
    `,
      [req.params.id]
    )
    .then((response) => {
      res.json({
        jobData: response.rows,
      });
    });
});

// THIS DELETES A JOB
App.delete("/api/jobs/:id", (req, res) => {
  const { id } = req.params;
  const data = db
    .query(`DELETE FROM jobs WHERE id = $1;`, [id])
    .then((response) => {
      res.json({
        jobs: response.rows,
      });
    });
});

// ------------------------------------- MESSAGES

App.get("/api/messages/:first_id/:second_id", (req, res) => {
  const data = db
    .query(
      "SELECT * FROM messages WHERE (sender_id = $1 AND receiver_id = $2) OR (sender_id = $2 AND receiver_id = $1)",
      [req.params.first_id, req.params.second_id]
    )
    .then((response) => {
      res.json({
        messages: response.rows,
      });
    });
});

App.put("/api/messages", (req, res) => {
  const { sender_id, receiver_id, message } = req.body;
  const data = db
    .query(
      `INSERT INTO messages (sender_id, receiver_id, message) VALUES ($1, $2, $3)`,
      [sender_id, receiver_id, message]
    )
    .then((response) => {
      res.json({
        messages: response.rows,
      });
    });
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
