const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/login/:id", (req, res) => {
    req.session['user_id'] = Number(req.params.id);
    console.log(typeof req.session.user_id, req.session.user_id);
    res.redirect('/');
  });
  return router;
};
