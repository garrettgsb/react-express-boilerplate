const Express = require('express');
const app = Express();
const BodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8080;
const cookieSession = require('cookie-session')

// Express Configuration
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(Express.static('public'));
app.use(cors({origin: 'http://localhost:3002',   methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],   credentials: true }));
app.use(cookieSession({
  name: 'fitness',
  keys: ['secrets','secretkey']
}))
app.use(function(req, res, next){
  res.header("Content-Type", "application/json;charset=UTF-8")
  res.header("Access-Control-Allow-Credentials", true)
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept")
  next()
})


const programRouter = require('./routes/programRoutes');
const dashboardRouter = require('./routes/dashboardRoutes');
const workoutRouter = require('./routes/workoutRoutes');
const exerciseSelectionRouter = require('./routes/exerciseSelectionRoutes');
const exerciseRouter = require('./routes/exerciseRoutes');
const loginRouter = require('./routes/loginRoutes');

//routes
app.use('/api/programs', programRouter);
app.use('/api/dashboard', dashboardRouter);
app.use('/api/workouts', workoutRouter);
app.use('/api/exercises', exerciseRouter);
app.use('/api/exerciseselections', exerciseSelectionRouter);
app.use('/api/login', loginRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express listening on port ${PORT}`);
});
