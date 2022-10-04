require("dotenv").config();
const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const Bcrypt = require("bcryptjs");
const CookieSession = require("cookie-session");
const fs = require("fs");


//twilio
import newUserMessage from "./twilio";
const twilio = require("twilio")
const accountNumber = process.env.TWILIO_ACCTNUM;
const authToken = process.env.TWILIO_TOKEN;

const client = new twilio(accountNumber, authToken);

//port
const PORT = 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));
App.use(
  CookieSession({
    name: "session",
    keys: ["key1", "key2"],
    maxAge: 30 * 60 * 1000, // 30 minutes session
  })
);

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
  
  const hashedPassword = Bcrypt.hashSync(password, 10);
  db.createUser({
    name,
    email,
    hashedPassword,
    phone,
    gender,
    age,
    planner,
    runner,
  })
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

// User login
App.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  db.getUserByEmail({ email })
    .then(({ user }) => {
      if (Bcrypt.compareSync(password, user.password)) {
        req.session.user = user;
        res.send({ user });
        return;
      }
      res.send({ message: "User not found." });
    })
    .catch((e) => res.send(e));
});

// User logout
App.post("/api/logout", (req, res) => {
  req.session.user = null;
  res.send({ user: null });
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

// Get image for run
App.get("/api/runs/image/:id", (req, res) => {
  const runID = req.params.id;
  const path = `./uploads/${runID}.jpeg`;
  // Checking if the path exists
  fs.exists(path, function (exists) {
    if (!exists) {
      res.writeHead(404, {
        "Content-Type": "text/plain",
      });
      res.end("404 Not Found");
      return;
    }

    // Setting the headers
    res.writeHead(200, {
      "Content-Type": "image/jpeg",
    });

    // Reading the file
    fs.readFile(path, function (err, content) {
      // Serving the image
      res.end(content);
    });
  });
});

// Add new image when creating a new run
App.post(
  "/api/image/:runID",
  BodyParser.raw({ type: ["image/jpeg", "image/png"], limit: "5mb" }),
  (req, res) => {
    const { runID } = req.params;
    try {
      fs.writeFile(`./uploads/${runID}.jpeg`, req.body, (error) => {
        if (error) {
          throw error;
        }
      });
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }
);

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
    latitude: 43.952347,
    longitude: -79.431323,
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
      const { runnerRuns } = response;
      res.send({ runnerRuns });
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
      const { plannerRuns } = response;
      res.send({ plannerRuns });
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

// Register for a run
App.post("/api/register", (req, res) => {
  const { runner_id, run_id } = req.body;

  db.registerForARun({ runner_id, run_id })
    .then((response) => {
      const { user_run } = response;

      if (!user_run)
        return res.send({
          message:
            "You could not be registered for a run. This event was in the past or you are already registered for this run.",
        });

      res.send({ user_run });
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
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
