const ENV = require("./src/environment");

// Local Resources
const menu =require('./src/routes/menu');
const order = require('./src/routes/order');
const stores = require('./src/routes/stores');
const users = require('./src/routes/users');
const reset = require('./src/db/reset');
const db = require('./src/db/config')


// Foreign Libraries
const express = require("express");
const BodyParser = require("body-parser");
const morgan = require("morgan")


// Express Configuration
const app = express();
const PORT = process.env.PORT || 8080;
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(express.static("public"));
app.use(morgan('dev'));

// Routes
app.use("/api", menu(db));
app.use("/api", order(db));
app.use("/api", stores(db));
app.use("/api", users(db));
if (ENV ==='development' || ENV === 'test'){
app.use("/api/debug", reset(db))
}

app.listen(PORT, () => {
  console.log(
    `Server is listening on port ${PORT} in ${ENV} mode.`
  );
});

app.close = () => {
  return db.end();
}
