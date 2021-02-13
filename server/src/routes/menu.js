const router = require("express").Router();

module.exports = (db) => {
  // READ GET /menu/:id  "Get Menu"
  router.get("/menu/:id", (req, res) => {
    const queryParams = [req.params.id];
    db.query(`SELECT * FROM menu_items WHERE store_id = $1`, queryParams)
      .then((result) => {
        result.rows.length
          ? res.json(result.rows)
          : res.json({
              message: `no store found with id: ${req.params.id}`,
            });
      })
      .catch((err) => res.status(401).json({ error: err.message }));
  });
  return router;
};
