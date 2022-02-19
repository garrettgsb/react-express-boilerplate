const express = require('express');
const router  = express.Router();
const { insertReminder } = require('../db/reminders-queries');

router.post("/", (req, res) => {

  insertReminder(req.body)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => console.log(error));
});

module.exports = router;