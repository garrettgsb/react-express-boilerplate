const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;

App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

App.get("/api/data", (req, res) => {
  res.json({
    message: "Seems to work!",
  });
});

// Handling registration POST request

App.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});
