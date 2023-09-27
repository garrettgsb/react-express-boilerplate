const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
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
App.get("/", (req, res) => {
  const templateVars = {
    id: req.session.id,
    name: req.session.name
  }
  res.send(templateVars)
})
App.get("/api/data", (req, res) => {
  res.json({
    message: "Seems to work!",
  });
});

App.use(loginRoutes)

// Handling registration POST request

App.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});
