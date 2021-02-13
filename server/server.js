const express = require("express");
const BodyParser = require("body-parser");
const morgan = require("morgan")
const db = require('./src/db/config')


const app = express();
const PORT = 8080;



// Express Configuration
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(express.static("public"));
app.use(morgan('dev'));


// Sample GET route
app.get("/api/data", (req, res) =>
  res.json({
    message: "Seems to work!",
  })
);

app.get("/", (req, response) => {
  db.query('SELECT * FROM users;')
  .then((res)=>{response.send(res.rows)})
  .catch((err) => {console.log("error", err)})
});

//PORT setup
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Server is listening on port ${PORT}`
  );
});

app.close = () => {
  return db.end();
}
