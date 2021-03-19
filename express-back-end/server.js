const Express = require('express');
require('dotenv').config();
const app = Express();
const path= require('path');
const bodyParser = require("body-parser");
const cors = require('cors');
const dbHelpers = require('./db/dbhelpers');
const searchRoutes = require('./routes/searchRoutes')


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
const { getAllSpecies } = require("./db/dbhelpers.js")(db);



app.get('/login', (req, res) => res.json({
  message: "Seems to work!",
}));

app.post('/login/new,', (req, res) =>  {
  console.log("/login posted");
  res.json({
  message: "User has logged in"
})});

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
  getUserPlants(id).then((rows) => {
    console.log(rows);
    res.status(200).json(rows);
  })
});

app.get("/wishlist/:id", (req, res) => {
  console.log("dbHelpers;", dbHelpers());
  dbHelpers(db).getWishlistForUser(req.params.id).then((rows) => {
    
    console.log(rows);
    res.status(200).json(rows);
  })
})

app.get("/tasks/:id", (req, res) => {
  getUserTasks(id).then((rows) => {
    console.log(rows);
    res.status(200).json(rows);
  })
})

console.log("search routes", searchRoutes);
app.use('/test', searchRoutes(db));


// app.use("*", (req, res) => {console.log("unhandle path", req.url);
//   res.status(200).end()});


app.listen(PORT, () => {

  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
