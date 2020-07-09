require("dotenv").config();

const Express = require("express");
const multer = require("multer");
const formidable = require("formidable");
const App = Express();
const fs = require("fs");
const BodyParser = require("body-parser");
const PORT = 8080;

// DB connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

const { getAllWarrantiesQuery } = require("./lib/dbQueries");

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

// Sample GET route
App.get("/api/data", (req, res) =>
  res.json({
    message: "Seems to work!",
  })
);

App.get("/api/users/:id", (req, res) => {
  let queryParams = [req.params.id];
  let query = "SELECT * FROM users WHERE id=$1";
  db.query(query, queryParams).then((data) => {
    res.json(data.rows);
  });
});

App.get("/api/warranties", (req, res) => {
  let query = getAllWarrantiesQuery;
  db.query(query).then((data) => {
    res.json(data.rows);
  });
});

App.get("/api/payments", (req, res) => {
  let query = "SELECT * FROM entries WHERE type='payment'";
  db.query(query).then((data) => {
    res.json(data.rows);
  });
});

App.post("/api/items", (req, res) => {
  console.log(req.body);
  const {
    itemName,
    itemCategory,
    itemDescription,
    warrantyStartDate,
    warrantyDuration,
    warrantySmsNotification,
    warrantyEmailNotification,
    warrantyNotifyDaysPrior,
    paymentStartDate,
    paymentDuration,
    paymentSmsNotification,
    paymentEmailNotification,
    paymentNotifyDaysPrior,
    paymentMonthly,
  } = req.body;

  db.query(
    `
    INSERT INTO items (user_id, name, category, description) VALUES (1, $1, $2, $3)
    RETURNING id;
  `,
    [itemName, itemCategory, itemDescription]
  )
    .then((data) => {
      console.log(typeof data.rows[0].id);
      let dir = `./uploads/1/${data.rows[0].id}`;
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }

      if (warrantyStartDate) {
        db.query(
          `
      INSERT INTO entries (item_id, type, duration_in_months, start_date, sms, email, days_prior) VALUES ($1, 'warranty', $2, $3, $4, $5, $6);
      `,
          [
            data.rows[0].id,
            warrantyDuration,
            new Date(warrantyStartDate).getTime(),
            warrantySmsNotification,
            warrantyEmailNotification,
            warrantyNotifyDaysPrior,
          ]
        );
      }
      if (paymentStartDate) {
        db.query(
          `
      INSERT INTO entries (item_id, type, duration_in_months, start_date, sms, email, days_prior) VALUES ($1, 'payment', $2, $3, $4, $5, $6);
      `,
          [
            data.rows[0].id,
            paymentDuration,
            new Date(paymentStartDate).getTime(),
            paymentSmsNotification,
            paymentEmailNotification,
            paymentNotifyDaysPrior,
          ]
        );
      }
      res.json(data.rows[0].id);
    })
    .catch((error) => console.log(error));
});

// File download

// App.get("/api/files/:name", (req, res) => {
//   console.log("downloading");
//   res.download(`./uploads/${req.params.name}`);
// });
// App.get("/api/files", (req, res) => {
//   db.query(
//     `
//           SELECT url From files Where id = 3
//           `
//   ).then((data) => {
//     console.log("downloading");
//     // console.log(data.rows[0]);

//     res.download(data.rows[0].url);
//   });
// });
//
//

// File uploads
App.post("/api/uploadfile/:id", (req, res) => {
  const itemId = req.params.id;
  const folderPath = `./uploads/1/${itemId}/`;
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, folderPath);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });

  const upload = multer({ storage: storage }).single("file");

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log(err);
      return res.status(500).json(err);
    } else if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    console.log(req.file.filename);
    db.query(
      `
            INSERT INTO files (item_id, name, url) VALUES ($1, $2, $3);
            `,
      [itemId, req.file.filename, folderPath + req.file.filename]
    );
    return res.status(200).send(req.file);
  });
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
