const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const gasStationRoute = require("./routes/gas-stations");
const gasStationPriceRoute = require("./routes/gas-station-price");
const favoritesRoute = require("./routes/favorites");
const loginRoute = require("./routes/login");
const registerRoute = require("./routes/register");
const userRoute = require("./routes/users");
//const reviewRoute = require("./routes/review");
//const notificationRoute = require("./routes/notification");
const locationRoute = require("./routes/location");
//const updateRoute = require("./routes/update");
//const accountRoute = require("./routes/account");
//const settingsRoute = require("./routes/settings");

// Use routes
app.use("/api/gasStation", gasStationRoute);
//app.use("/api/gasStationPrice", gasStationPriceRoute);
//app.use("/api/favorites", favoritesRoute);
//app.use("/api/login", loginRoute);
//app.use("/api/register", registerRoute);
//app.use("/api/user", userRoute);
//app.use("/api/review", reviewRoute);
//app.use("/api/notification", notificationRoute);
//app.use("/api/location", locationRoute);
//app.use("/api/update", updateRoute);
//app.use("/api/account", accountRoute);
//app.use("/api/settings", settingsRoute);

// // Sample GET route
// app.get("/api/data", (req, res) =>
//   res.json({
//     message: "Seems to work!",
//   })
// );

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
