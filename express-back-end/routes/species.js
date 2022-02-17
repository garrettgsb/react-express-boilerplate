/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const speciesQueries = require('../db/species-queries');

// GET users table
router.get("/", (req, res) => {
  speciesQueries.getSpecies()
    .then((species) => {
      res.json({ species });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// export router object
module.exports = router;
