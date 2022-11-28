const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

const programRouter = require('./routes/programRoutes');
const dashboardRouter = require('./routes/dashboardRoutes');
const workoutRouter = require('./routes/workoutRoutes');
const exerciseRouter = require('./routes/exerciseRoutes');

//routes
App.use('/program', programRouter);
App.use('/dashboard', dashboardRouter);
App.use('/workout', workoutRouter);
App.use('/exercise', exerciseRouter );

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express listening on port ${PORT}`);
});
