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
      if (!user) res.send({ message: "User was not found" });
      res.send({ user });
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

App.post("/api/users", (req, res) => {
  const { name, email, password, phone, gender, age, planner, runner } =
    req.body;

  db.createUser({ name, email, password, phone, gender, age, planner, runner })
    .then((response) => {
      const { user } = response;
      if (!user) res.send({ message: "User was not created" });
      res.send({ user });
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

App.put("/api/users/:id", (req, res) => {
  res.send();
});

App.delete("/api/users/:id", (req, res) => {
  res.send();
});


//Runs
App.get("/api/runs", (req, res) => {
  db.getAllRuns()
    .then((response) => {
      const { runs } = response;
      res.send({ runs });
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

App.get("/api/runs/:id", (req, res) => {
  const { id } = req.params;
  db.getRun(id)
    .then((response) => {
      const { run } = response;
      res.send({ run });
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

App.post("/api/runs", (req, res) => {
  const { name, description, location, distance, time, date, planner_id } =
    req.body;

  db.createRun({
    name,
    description,
    location,
    distance,
    time,
    date,
    planner_id,
  })
    .then((response) => {
      const { run } = response;
      if (!run) res.send({ message: "Run was not created" });
      res.send({ run });
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

App.put("/api/runs/:id", (req, res) => {
  res.send();
});

App.delete("/api/runs/:id", (req, res) => {
  res.send();
});

// Users runs
// Runner
App.get("/api/runs/runner/:id", (req, res) => {
  const { id } = req.params;

  db.getRunsForRunner(id)
    .then((response) => {
      const { runs } = response;
      res.send({ runs });
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

// Planner
App.get("/api/runs/planner/:id", (req, res) => {
  const { id } = req.params;

  db.getRunsForPlanner(id)
    .then((response) => {
      const { runs } = response;
      res.send({ runs });
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

// Join a run
App.post("/api/runs/runner", (req, res) => {
  const { runner_id, run_id } = req.body;

  db.joinARun({ runner_id, run_id })
    .then((response) => {
      const { user_run } = response;

      if (!user_run)
        return res.send({
          message:
            "Run could not be joined. This event was in the past or you are already registers for this run.",
        });

      res.send({ user_run });
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
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
