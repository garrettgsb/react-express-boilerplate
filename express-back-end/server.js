require("dotenv").config();

const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;

// DB connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

const { getAllWarrantiesQuery } = require("./lib/dbQueries");

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

// Sample GET route
App.get("/api/data", (req, res) =>
  res.json({
    message: "Seems to work!",
  })
);

// App.get("/api/users", (req, res) => {
//   let query = "SELECT * FROM users";
//   db.query(query).then((data) => {
//     res.json(data.rows);
//   });
// });

App.get("/api/users/:id", (req, res) => {
  let queryParams = [req.params.id];
  let query = "SELECT * FROM users WHERE id=$1";
  db.query(query, queryParams).then((data) => {
    res.json(data.rows);
  });
});

App.get("/api/warranties/search", (req, res) => {
  // let term = "";
  console.log(req.query);
  // req.params.term ? (term = `%${req.params.term}%`) : (term = "");
  let term = `%${req.query["term"]}%`;

  let queryParams = [term];
  console.log(term);
  let query = `SELECT entries.*, items.name as item_name, items.category as item_category
                FROM entries
                JOIN items ON items.id = entries.item_id
                WHERE type='warranty' AND items.name LIKE $1`;
  db.query(query, queryParams).then((data) => {
    res.json(data.rows);
  });
});

App.get("/api/warranties", (req, res) => {
  let query = getAllWarrantiesQuery;
  db.query(query).then((data) => {
    res.json(data.rows);
  });
});

App.get("/api/payments", (req, res) => {
  let query = "SELECT * FROM entries WHERE type='payment'";
  db.query(query).then((data) => {
    res.json(data.rows);
  });
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
