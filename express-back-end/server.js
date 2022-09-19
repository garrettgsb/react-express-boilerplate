require("dotenv").config();
const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

// Import db
const db = require("./lib/db");

// Sample GET route
App.get("/api/data", (req, res) =>
  res.json({
    message: "Seems to work!",
  })
);

// Sample GET route to test if DB connection is working
App.get("/test", (req, res) => {
  db.testFunction().then((response) => {
    res.send({ response });
  });
});

// Sample GET route
App.get("/api/test", (req, res) => {
  res.send({ data: "This is working!!!" });
});

//Routes

//Home
App.get("/", (req, res) => {
  res.send();
});

//Users
App.get("/api/users", (req, res) => {
  db.getAllUsers()
    .then((response) => {
      const { users } = response;
      res.send({ users });
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

App.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  db.getUser(id)
    .then((response) => {
      const { user } = response;
      res.send({ user });
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

App.post("/api/users/:id", (req, res) => {
  res.send();
});

App.put("/api/users/:id", (req, res) => {
  res.send();
});

App.delete("/api/users/:id", (req, res) => {
  res.send();
});

//Runs
App.get("/api/runs", (req, res) => {
  res.send();
});

App.get("/api/runs/:id", (req, res) => {
  res.send();
});

App.post("/api/runs/:id", (req, res) => {
  res.send();
});

App.put("/api/runs/:id", (req, res) => {
  res.send();
});

App.delete("/api/runs/:id", (req, res) => {
  res.send();
});

//Register
App.get("/api/register", (req, res) => {
  res.send();
});

//Redirect
App.get("/api/redirect", (req, res) => {
  res.send();
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
