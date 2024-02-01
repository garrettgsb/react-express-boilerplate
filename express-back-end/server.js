const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

// Import and use the user-related route files
const loginRoute = require("./api/users/login");
const signupRoute = require("./api/users/signup");
const profileRoute = require("./api/users/profile");

// Use the routes
app.use("/api/users/login", loginRoute);
app.use("/api/users/signup", signupRoute);
app.use("/api/users/profile", profileRoute);

// Sample GET route
app.get("/api/data", (req, res) =>
  res.json({
    message: "Seems to work!",
  })
);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
