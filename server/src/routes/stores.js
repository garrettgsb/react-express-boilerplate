const router = require("express").Router();

module.exports = (db) => {
  // BROWSE GET /stores/  "Get all stores"
  router.get("/stores/", (req, res) => {
    db.query(`SELECT * FROM stores;`)
      .then((result) => {
        res.json(result.rows);
      })
      .catch((err) => {
        res.status(400).json({ error: err.message });
      });
  });

  // READ GET /stores/:id  "Get Store Details"
  router.get("/stores/:id", (req, res) => {
    const queryParams = [req.params.id];
    db.query(`SELECT * FROM stores WHERE id = $1`, queryParams)
      .then((result) => {
        result.rows.length
          ? res.json(result.rows)
          : res.json({
              message: `no stores found with id: ${req.params.id}`,
            });
      })
      .catch((err) => res.status(401).json({ error: err.message }));
  });

  return router;
};
