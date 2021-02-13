const express = require("express");
const BodyParser = require("body-parser");
const morgan = require("morgan")


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

//PORT setup
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Server is listening on port ${PORT}`
  );
});
