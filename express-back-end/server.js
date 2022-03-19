const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;

// Express Configuration
// app.use(express.static("public"));

// Routes requires
const clientRoutes = require("./routes/clients");
const professionalRoutes = require("./routes/professionals");

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/api/clients", clientRoutes());
app.use("/api/professionals", professionalRoutes());

app.get("/api/data", (req, res) =>
  res.json({
    message: "Seems to work!",
  })
);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
