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


var corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));



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



app.get("/garden", (req, res) => {
  dbHelpers(db).getUserPlants(req.session.user_id).then((rows) => {
    console.log(rows);
    res.status(200).json(rows);
  })
});

app.get("/garden/plant/:id", (req, res) => {
  dbHelpers(db).addPlantToGarden(req.session.user_id, req.params.id).then((rows) => {
    console.log(rows);
    res.status(200).json(rows);
  })
});



app.get("/graveyard/plant/:id", cors(corsOptions), (req, res) => {
  console.log("Move plant id", req.params.id, "to graveyard for user :", req.session.user_id);
  dbHelpers(db).movePlantToGraveyard(req.params.id).then((rows) => {
    console.log(rows);
    res.status(200).json(rows);
  })
});

app.post("/wishlist/plant/:id", cors(corsOptions), (req, res) => {
  console.log("Add plant species id", req.params.id, "to wishlist for user :", req.session.user_id);
  dbHelpers(db).addPlantToWishlist(req.session.user_id, req.params.id).then((rows) => {
    console.log(rows);
    res.status(200).json(rows);
  })
});

app.get("/wishlist", cors(corsOptions), (req, res) => {
  console.log("Fetching the wishlist for user:", req.session.user_id);
  dbHelpers(db).getWishlistForUser(req.session.user_id).then((rows) => {
    console.log(rows);
    res.status(200).json(rows);
  })
});

app.delete("/wishlist", cors(corsOptions), (req, res) => {
  const userID = req.session.user_id;
  const wishlistID = req.params.listing_id;
    if(!userID) {
      res.redirect("/");
    }
  db.removePlantFromWishlist(userID, wishlistID)
    .then(() => {
      res.status(200).json(rows);
    });
});




// -----------------------------------------
// Unused Routes -- may be used later
app.get("/graveyard", (req, res) => {
  dbHelpers(db).getDeadPlants(req.session.user_id).then((rows) => {
    console.log(rows);
    res.status(200).json(rows);
  })
});

app.get("/tasks", (req, res) => {
  dbHelpers(db).getUserTasks(req.session.user_id).then((rows) => {
    console.log(rows);
    res.status(200).json(rows);
  })
})

console.log("search routes", searchRoutes);



app.listen(PORT, () => {

  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

//To do: logout route, post routes, delete route