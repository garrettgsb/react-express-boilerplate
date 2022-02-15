// load .env data into process.env
require('dotenv').config({path: '../.env'});

const Express = require('express');
const Server = Express();
const BodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

// Express Configuration
Server.use(BodyParser.urlencoded({
  extended: false
}));
Server.use(BodyParser.json());
Server.use(Express.static('public'));


// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");

// Sample GET route
Server.use("/api/users", usersRoutes);



Server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});