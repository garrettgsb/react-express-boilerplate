const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;
const db = require("./lib/db");

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

App.get("/api/users", (req, res) => {
  const data = db.query("SELECT * FROM users").then((response) => {
    res.json({
      users: response.rows,
    });
  });
});

App.get("/api/artworks", (req, res) => {
  const data = db.query("SELECT * FROM artworks").then((response) => {
    res.json({
      artworks: response.rows,
    });
  });
});

App.put("/api/artworks", (req, res) => {
  console.log(req.body);
  const {
    id,
    title,
    imgLink,
    projectLink,
    description,
    forSale,
    price,
  } = req.body;
  const data = db
    .query(
      `INSERT INTO artworks (author_id, title, img_link, project_link, descrip, for_sale, price) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [id, title, imgLink, projectLink, description, forSale, price]
    )
    .then((response) => {
      res.json({
        artworks: response.rows,
      });
    });
});

App.get("/api/friends", (req, res) => {
  const data = db.query("SELECT * FROM friends").then((response) => {
    res.json({
      friends: response.rows,
    });
  });
});

App.get("/api/jobs", (req, res) => {
  const data = db
    .query(
      "SELECT jobs.id AS id, username, title, description, pay FROM jobs JOIN users ON users.id = user_id"
    )
    .then((response) => {
      res.json({
        jobs: response.rows,
      });
    });
});

App.get("/api/jobs/:id", (req, res) => {
  const data = db
    .query(
      "SELECT jobs.id AS id, username, title, description, pay FROM jobs JOIN users ON users.id = user_id WHERE jobs.id = $1",
      [req.params.id]
    )
    .then((response) => {
      res.json({
        job: response.rows,
      });
    });
});

App.get("/api/messages", (req, res) => {
  const data = db.query("SELECT * FROM messages").then((response) => {
    res.json({
      messages: response.rows,
    });
  });
});

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

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
