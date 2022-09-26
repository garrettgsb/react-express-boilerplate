const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8080, () => {
  console.log("Server has started on port 8080");
});
