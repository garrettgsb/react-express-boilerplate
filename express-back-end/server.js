const Express = require("express");
const morgan = require("morgan");
const BodyParser = require("body-parser");
const App = Express();
const PORT = 8080;

// Express Configuration
App.use(Express.static("public"));

// Routes requires
const clientRoutes = require("./routes/clients");

// Middleware
App.use(morgan("dev"));
App.use(
  BodyParser.urlencoded({ extended: false })
);
App.use(BodyParser.json());

// Routes
App.use("/api/clients", clientRoutes());

App.get("/api/data", (req, res) =>
  res.json({
    message: "Seems to work!",
  })
);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
