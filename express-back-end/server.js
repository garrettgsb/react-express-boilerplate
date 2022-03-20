require("dotenv").config();
const Express = require("express");
const morgan = require("morgan");
const BodyParser = require("body-parser");
const app = Express();
const PORT = 8080;

// Express Configuration
// app.use(Express.static("public"));

// Routes requires
const clientRoutes = require("./routes/clients");
const professionalRoutes = require("./routes/professionals");
const appointmentRoute = require("./routes/appointments");
const specialtiesRoute = require("./routes/specialties");

// Middleware
app.use(morgan("dev"));
app.use(
  BodyParser.urlencoded({ extended: false })
);
app.use(BodyParser.json());

// Routes
app.use("/api/clients", clientRoutes());
app.use(
  "/api/professionals",
  professionalRoutes()
);
app.use("/api/appointments", appointmentRoute());
app.use("/api/specialties", specialtiesRoute());

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
