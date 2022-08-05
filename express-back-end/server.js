const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// Mount all /api resources
const apiRoutes = require('./routes/api-routes');
App.use('/api', apiRoutes);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
