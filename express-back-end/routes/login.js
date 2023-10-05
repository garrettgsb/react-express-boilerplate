const express = require("express");
const router = express.Router();
const loginQuery = require("../db/queries/get_user_by_email");



router.post('/login', (req, res) => {
  const { email, password } = req.body;
  loginQuery.getUserWithEmail(email)
    .then((user) => {
      if (!user) {
        res.status(400)
        return res.json({ error: "no user with that id" });
      }
      if (password !== user[0].password) {
        res.status(400)
        return res.json({ error: "Incorrect Password" });
      }

      // Set user data in the session
      req.session.id = user[0].id;
      req.session.name = user[0].username;

      console.log(req.session)

      // Send user data as a response
      res.json({
        id: user[0].id,
        name: user[0].username,
        // Add other user-related data as needed
      });
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

module.exports = router;
