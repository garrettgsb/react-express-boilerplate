const ENV = require("./src/environment");

// Local Resources
const menu = require("./src/routes/menu");
const order = require("./src/routes/order");
const stores = require("./src/routes/stores");
const users = require("./src/routes/users");
const reset = require("./src/db/reset");
const db = require("./src/db/config");

// Foreign Libraries
const express = require("express");
const BodyParser = require("body-parser");
const morgan = require("morgan");
const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Express Configuration
const app = express();
const PORT = process.env.PORT || 8080;
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(express.static("public"));
app.use(morgan("dev"));

//Twilio SMS Route
app.post("/api/messages", (req, res) => {
  console.log(req.body);
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.message.to,
      body: req.body.message.body,
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

// Routes
app.get("/", (req, res) =>
  res
    .status(200)
    .json({ status: 200, success: true, message: "The server is working" })
);
app.use("/api", menu(db));
app.use("/api", order(db));
app.use("/api", stores(db));
app.use("/api", users(db));
if (ENV === "development" || ENV === "test") {
  app.use("/api/debug", reset(db));
}
app.use((req, res) => {
  const err = new Error("Route Not Found");
  const status = 404;
  res.status(status).json({ status, success: false, error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} in ${ENV} mode.`);
});

app.close = () => {
  return db.end();
};
