const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;

App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
const cookieSession = require('cookie-session')
App.use(cookieSession ({
  name: "session",
  keys: ["LHL", "Cineflix"],
  maxAge: 24 * 60 * 60 * 1000
}))
//Routes for each thing
const loginRoutes = require('./routes/login')
const watchlistRoutes = require('./routes/watchlist')
const logoutRoutes = require('./routes/logout')

//Middleware
const auth = require('./middlewares/auth')

App.get("/api/userData", auth.isAuthorized, (req, res) => {
  const userData = {
    id: req.session.id,
    name: req.session.name
  }
  res.json(userData)
})
App.get("/api/data", (req, res) => {
  res.json({
    message: "Seems to work!",
  });
});

App.use(loginRoutes);
App.use("/api/watchlist", watchlistRoutes); // base route for watchlist APIs

App.use(logoutRoutes)


// Handling registration POST request

App.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});
