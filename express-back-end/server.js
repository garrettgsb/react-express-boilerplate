const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const cors = require("cors");
const PORT = 8080;
const cookieSession = require('cookie-session')

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));
App.use(cors());

const programRouter = require("./routes/programRoutes");
const dashboardRouter = require("./routes/dashboardRoutes");
const workoutRouter = require("./routes/workoutRoutes");
const exerciseRouter = require("./routes/exerciseRoutes");

//routes
App.use("/api/programs", programRouter);
App.use("/api/dashboard", dashboardRouter);
App.use("/api/workouts", workoutRouter);
App.use("/api/exercises", exerciseRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express listening on port ${PORT}`);
});
