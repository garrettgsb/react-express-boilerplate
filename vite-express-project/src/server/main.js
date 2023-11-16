const express = require("express");
const ViteExpress = require("vite-express");

const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

// using morgan for logs
app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
