const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const cookieSession = require("cookie-session");

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// cookies
app.use(cookieSession({
  name: "session",
  keys: ["user_id"]
}))

// Resource route for favourites:
app.use("/favourites", favourites(db));

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
