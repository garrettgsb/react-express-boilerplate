const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;
const puppeteer = require("puppeteer");

App.set("view engine", "ejs");

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

// Home Page
// Avoid creating more routes in this file
// Create a new file in the routes folder

App.get("/", (req, res) => {
  res.render("index");
});

// Puppeteer Route
App.get("/capture-screenshot", async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://example.com");
    const screenshot = await page.screenshot();
    await browser.close();

    res.contentType("image/png").send(screenshot);
  } catch (error) {
    console.error("Error capturing screenshot:", error);
    res.status(500).send("Internal Server Error");
  }
});

App.listen(PORT, () => {
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});

// // Sample GET route
// App.get("/api/data", (req, res) =>
//   res.json({
//     message: "Seems to work!",
//   })
// );

// App.listen(PORT, () => {
//   // eslint-disable-next-line no-console
//   console.log(
//     `Express seems to be listening on port ${PORT} so that's pretty good 👍`
//   );
// });
