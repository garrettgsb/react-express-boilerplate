// User login
const express = require('express');
const router  = express.Router();
//Changed it to .get as the logout "button" isn't a post request.
router.get('/api/logout', (req, res) => {
  req.session = null;
  console.log("test from logout")
  res.sendStatus(200)
});

module.exports = router;
