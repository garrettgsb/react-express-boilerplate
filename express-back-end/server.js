const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;
// const PORT = 3003;
const db = require("./lib/db");

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

App.get("/api/search", (req, res) => {
  const searchItem = req.query.query;
  Promise.all([
    db.query(
      `SELECT * FROM artworks WHERE LOWER(title) LIKE $1 OR LOWER(descrip) LIKE $1`,
      ["%" + searchItem.toLowerCase() + "%"]
    ),
    db.query(
      `SELECT *, users.id as user_id FROM users WHERE LOWER(username) LIKE $1`,
      ["%" + searchItem.toLowerCase() + "%"]
    ),
    db.query(
      `SELECT * FROM jobs WHERE LOWER(title) LIKE $1 OR LOWER(description) LIKE $1 OR LOWER(location) LIKE $1 OR LOWER(company) LIKE $1`,
      ["%" + searchItem.toLowerCase() + "%"]
    ),
  ]).then((all) => {
    res.json({
      artworks: all[0].rows,
      users: all[1].rows,
      jobs: all[2].rows,
    });
  });
});

// ------------------------------------- USERS

App.get("/api/users", (req, res) => {
  const data = db.query("SELECT * FROM users").then((response) => {
    res.json({
      users: response.rows,
    });
  });
});

// THIS GETS A USERs ARTWORKS
App.get("/api/artworks/users/:id", (req, res) => {
  const data = db
    .query(
      `
    SELECT *, users.id as user_id
    FROM users 
    LEFT JOIN artworks ON users.id = author_id
    WHERE users.id = $1
    ORDER BY artworks.id DESC;
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
  const data = db
    .query("SELECT * FROM artworks ORDER BY id DESC")
    .then((response) => {
      res.json({
        artworks: response.rows,
      });
    });
});

App.get("/api/artworks/search/:input", (req, res) => {
  const data = db.query(`
    SELECT * FROM artworks
  `);
});

App.get("/api/artworks/:id", (req, res) => {
  const { id } = req.params;
  const data = db
    .query("SELECT * FROM artworks WHERE id = $1", [id])
    .then((response) => {
      res.json({
        artwork: response.rows,
      });
    });
});

App.put("/api/artworks", (req, res) => {
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

// THIS EDITS A ARTWORK
App.put("/api/artworks/:art_id", (req, res) => {
  const { id, title, imgLink, projectLink, description, forSale, price } =
    req.body;
  const data = db
    .query(
      `UPDATE artworks SET author_id=$2, title=$3, img_link=$4, project_link=$5, descrip=$6, for_sale=$7, price=$8
      WHERE id = $1;
           `,
      [
        req.params.art_id,
        id,
        title,
        imgLink,
        projectLink,
        description,
        forSale,
        price,
      ]
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
      friends.id as friends_id,
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
  const { first_user_id, second_user_id } = req.body;
  const data = db
    .query(
      `INSERT INTO friends (first_user_id, second_user_id) 
      VALUES ($1, $2)
      ON CONFLICT (first_user_id, second_user_id)
      DO NOTHING;`,
      [first_user_id, second_user_id]
    )
    .then((response) => {
      res.json({
        friends: response.rows,
      });
    });
});

App.get("/api/jobs", (req, res) => {
  const data = db
    .query(
      `SELECT jobs.id AS id, user_id, username, title, description, pay, company, location 
      FROM jobs 
      JOIN users ON users.id = user_id 
      ORDER BY id DESC;`
    )
    .then((response) => {
      res.json({
        jobs: response.rows,
      });
    });
});

// THIS GETS A USERs JOBS
App.get("/api/user/:id/jobs", (req, res) => {
  const data = db
    .query(
      `
    SELECT * 
    FROM users 
    JOIN jobs ON users.id = user_id
    WHERE users.id = $1
    ORDER BY jobs.id DESC;
    `,
      [req.params.id]
    )
    .then((response) => {
      res.json({
        userJobs: response.rows,
      });
    });
});

App.get("/api/jobs/:id", (req, res) => {
  const data = db
    .query(
      `
    SELECT * 
    FROM jobs
    WHERE id = $1
    `,
      [req.params.id]
    )
    .then((response) => {
      res.json({
        job: response.rows,
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

// THIS EDITS A JOB
App.put("/api/jobs/:job_id", (req, res) => {
  const { title, description, pay, company, location, id } = req.body;
  const data = db
    .query(
      `UPDATE jobs SET title=$2, description=$3, pay=$4, company=$5, location=$6, user_id=$7
      WHERE id = $1;
           `,
      [req.params.job_id, title, description, pay, company, location, id]
    )
    .then((response) => {
      res.json({
        jobs: response.rows,
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
