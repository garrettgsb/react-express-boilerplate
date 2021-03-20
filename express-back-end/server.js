const Express = require('express');
require('dotenv').config();
const app = Express();
const path= require('path');
const bodyParser = require("body-parser");
const cors = require('cors');
const dbHelpers = require('./db/dbhelpers');
const searchRoutes = require('./routes/searchRoutes')
const cookieSession = require('cookie-session');

// const router = express.Router()

const PORT = 8080;


app.use(Express.urlencoded({ extended: false }));
app.use(Express.json());
app.use(Express.static('public'));
app.use(cors());


// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000/garden"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
var corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


// app.use(Express.static("public"));


const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();


app.use(cookieSession({
  name: 'session',
  keys: ["user_id"],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

// app.get('/login', (req, res) => res.json({
//   message: "Seems to work!",
// }));

// app.post('/login/new,', (req, res) =>  {

//   res.json({
//   message: "User has logged in"
// })});

app.get("/login/:id", cors(corsOptions), (req, res) => {
  const userID = req.params.id
  req.session.user_id = userID;
  console.log("Logging in with userID:", req.session.user_id);
  res.json({id: userID, username: 'test', email: 'email@test.com'});
});


app.get("/logout", cors(corsOptions), (req, res) => {
  req.session = null;
  // console.log("Logging out user", req.session.user_id);
  res.send("successfully logged out");
});


app.get("/search", (req, res) => {
  console.log("Current User ID", req.session.user_id)
  dbHelpers(db).getAllSpecies().then((rows) => {
    console.log(rows);
    res.status(200).json(rows);
  })
});

app.get("/garden", cors(corsOptions), (req, res) => {
// app.get("/garden", (req, res) => {
  console.log("================================");
  console.log("Current user id:", req.session.user_id);
  dbHelpers(db).getUserPlants(req.session.user_id).then((rows) => {
    console.log("++++++++++++++++++++++++++++++++");
    console.log(rows);
    res.status(200).json(rows);
  })
});

// Sample GET route
app.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

app.get('/api/garden', (req, res) => res.json({
  message: "Seems to work!",
}));


app.get("/garden", (req, res) => {
  dbHelpers(db).getUserPlants(req.session.user_id).then((rows) => {
    console.log(rows);
    res.status(200).json(rows);
  })
});

app.get("/graveyard", (req, res) => {
  dbHelpers(db).getDeadPlants(req.session.user_id).then((rows) => {
    console.log(rows);
    res.status(200).json(rows);
  })
});

app.get("/wishlist", (req, res) => {
  dbHelpers(db).getWishlistForUser(req.session.user_id).then((rows) => {

    console.log(rows);
    res.status(200).json(rows);
  })
})

app.get("/tasks", (req, res) => {
  dbHelpers(db).getUserTasks(req.session.user_id).then((rows) => {
    console.log(rows);
    res.status(200).json(rows);
  })
})

console.log("search routes", searchRoutes);

app.use('/test', searchRoutes(db));
app.use("/api/search", searchRoutes(db));
// app.use("*", (req, res) => {console.log("unhandle path", req.url);
//   res.status(200).end()});


app.listen(PORT, () => {

  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

//To do: logout route, post routes, delete route