// load .env data into process.env
require('dotenv').config({
  path: '../.env'
});

const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

// Express Configuration
App.use(BodyParser.urlencoded({
  extended: false
}));
App.use(BodyParser.json());
App.use(Express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const plantsRoutes = require("./routes/plants");
const speciesRoutes = require("./routes/species");
const postsRoutes = require("./routes/posts");
const newUserPlant = require("./routes/userPlants");
const wishlistRoutes = require("./routes/wishlist");
const reminderRoutes = require("./routes/reminders");


App.use("/api/users", usersRoutes);
App.use("/api/plants", plantsRoutes);
App.use("/api/posts", postsRoutes);
App.use("/api/species", speciesRoutes);
App.use("/api/user_plants", newUserPlant);
App.use("/api/wishlist", wishlistRoutes);
App.use("/api/reminders", reminderRoutes);


// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});