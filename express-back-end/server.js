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




// app.use(Express.static("public"));


const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();


app.use(cookieSession({
  name: 'session',
  keys: ["secret"],
  // Cookie Options   maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.get('/login', (req, res) => res.json({
  message: "Seems to work!",
}));

// app.post('/login/new,', (req, res) =>  {

//   res.json({
//   message: "User has logged in"
// })});

app.post("/login", (req, res) => {
  const userID = dbHelpers(db).randomUserID();
  console.log("Logging in with userID:", userID);
  req.session.user_id = userID;
  res.send("Success",);
});


app.get("/garden", (req, res) => {
  getAllSpecies().then((rows) => {
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

app.get("/garden/:id", (req, res) => {
  dbHelpers(db).getUserPlants(req.params.id).then((rows) => {
    console.log(rows);
    res.status(200).json(rows);
  })
});

app.get("/wishlist/:id", (req, res) => {
  dbHelpers(db).getWishlistForUser(req.params.id).then((rows) => {

    console.log(rows);
    res.status(200).json(rows);
  })
})

app.get("/tasks/:id", (req, res) => {
  dbHelpers(db).getUserTasks(req.params.id).then((rows) => {
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
