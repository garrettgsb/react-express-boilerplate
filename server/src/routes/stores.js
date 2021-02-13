const router = require("express").Router();

// BROWSE GET /stores/  "Get all stores"
// READ GET /stores/:id  "Get Store Details"

module.exports = (db) => {
router.get("", (req, res) => {
  db.query(``)
  .then()
  .catch()
})
return router;
}
