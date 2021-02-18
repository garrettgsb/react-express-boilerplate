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

  //READ GET /stores/orders/:store_id
  router.get("/stores/orders/:id", (req, res) => {
    const queryParams = [req.params.id];
    db.query(
      `SELECT orders.*, users.username, menu_items.name as item_name, COUNT(menu_items.name) as item_qty FROM orders 
       JOIN users ON users.id = orders.user_id 
       JOIN order_items ON orders.id = order_items.order_id 
       JOIN menu_items ON order_items.menu_item_id = menu_items.id 
       WHERE orders.store_id = $1 AND completed = false GROUP BY orders.id, users.username, menu_items.name;`,
      queryParams
    )
      .then((result) => {
        result.rows.length
          ? res.json(result.rows)
          : res.json({
              message: `no order found with id: ${req.params.id}`,
            });
      })
      .catch((err) => res.status(401).json({ error: err.message }));
  });

  return router;
};
