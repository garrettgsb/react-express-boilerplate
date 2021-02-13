if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ debug: process.env.DEBUG });
}

const menu =require('./src/routes/menu');
const order = require('./src/routes/order');
const stores = require('./src/routes/stores');
const users = require('./src/routes/users');
const reset = require('./src/db/reset');

const express = require("express");
const BodyParser = require("body-parser");
const morgan = require("morgan")
const db = require('./src/db/config')


const app = express();
const PORT = process.env.PORT || 8080;


// Express Configuration
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(express.static("public"));
app.use(morgan('dev'));


// Routes
app.get("/", (req, response) => {
  db.query('SELECT * FROM users;')
  .then((res)=>{response.send(res.rows)})
  .catch((err) => {console.log("error", err)})
});

app.use("/api", menu(db));
app.use("/api", order(db));
app.use("/api", stores(db));
app.use("/api", users(db));
app.use("/api/debug", reset(db))


// app.get("/api/data", (req, res) =>
//   res.json({
//     message: "Seems to work!",
//   })
// );

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Server is listening on port ${PORT} in mode.`
  );
});

app.close = () => {
  return db.end();
}
