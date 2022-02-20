const express = require("express");
const router = express.Router();
const { insertReminder, editLastWatered, getReminders } = require("../db/reminders-queries");

router.get("/", (req, res) => {
  getReminders()
    .then((response) => {
      res.json(response);
    })
    .catch((error) => console.log(error));
});

router.post("/", (req, res) => {
  insertReminder(req.body)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => console.log(error));
});

router.patch("/:id", (req, res) => {
  console.log("REQQQQQYYY", req);
  editLastWatered({
    plant_id: req.params.id,
    last_watered: req.body.last_watered,
  })
    .then((response) => {
      res.json(response);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
