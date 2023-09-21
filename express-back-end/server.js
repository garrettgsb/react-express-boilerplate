const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;

//Middleware
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
App.set('view engine', 'ejs'); // Set EJS as the view engine

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

//Getting the registration page
App.get('/register', (req, res) =>{
  res.render('register');
});
//Making a registration page
App.post('/register', (req, res) => {
  const{ username, email, password} = req.body
});
App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
