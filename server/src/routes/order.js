const router = require("express").Router();

// READ GET /order/:id  "Show Order"
// ADD POST /order/  "Add Order"
// BROWSE GET /orders  "Show all user Orders"

module.exports = (db) => {
router.get("", (req, res) => {
  db.query(``)
  .then()
  .catch()
})
return router;
}

