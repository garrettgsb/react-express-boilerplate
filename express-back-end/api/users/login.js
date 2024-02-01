const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Simulated user database (for demonstration purposes)
const users = [];

// Login route
router.post('/', (req, res) => {
  const { userName, password } = req.body;

  // Check the username against user database.
  const user = users.find((user) => user.userName === userName);

  if (user) {
    // Compare the provided password with the hashed password from the user object
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        // Handle error
        res.status(500).json({ message: "Internal server error" });
      } else if (result) {
        // Passwords match, login successful
        res.json({
          message: "Login successful",
          userName: user.userName,
          token: "your_generated_token",
        });
      } else {
        // Passwords don't match, return 401
        res.status(401).json({ message: "Invalid credentials" });
      }
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = router;
