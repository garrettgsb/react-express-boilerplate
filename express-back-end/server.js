const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const cors = require("cors");
const PORT = 8080;


// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));
App.use(cors());

const programRouter = require("./routes/programRoutes");
const dashboardRouter = require("./routes/dashboardRoutes");
const workoutRouter = require("./routes/workoutRoutes");
const exerciseRouter = require("./routes/exerciseRoutes");
const workoutLogsRouter = require("./routes/workoutLogsRoutes");
const loginRouter = require("./routes/loginRoutes");

//routes
App.use("/api/programs", programRouter);
App.use("/api/dashboard", dashboardRouter);
App.use("/api/workouts", workoutRouter);
App.use("/api/exercises", exerciseRouter);
App.use("/api/workoutlogs", workoutLogsRouter);
App.use("/api/login", loginRouter);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express listening on port ${PORT}`);
});
