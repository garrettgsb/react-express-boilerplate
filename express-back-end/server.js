import express from "express";
import cors from "cors";
import puppeteer from "puppeteer";

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// Express Configuration
app.set("view engine", "ejs");

// Home Page Route
app.get("/Home", (req, res) => {
  res.render("index");
});

// Puppeteer Route
app.get("/capture-screenshot", async (req, res) => {
  try {
    const browser = await puppeteer.launch({ headless: "new" }); // Launch with new headless mode
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

// Sample GET route
app.get("/api/data", (req, res) =>
  res.json({
    message: "Seems to work!",
  })
);

// Start the server
app.listen(PORT, () => {
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
