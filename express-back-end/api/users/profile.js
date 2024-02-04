const express = require('express');
const router = express.Router();

// Simulated user database (for demonstration purposes)
const users = [];

// Profile route
router.get('/:userName', (req, res) => {
  const { userName } = req.params;

  // Find the user by username ( should perform this check in database)
  const user = users.find((user) => user.userName === userName);

  if (user) {
    res.json({
      userName: user.userName,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

module.exports = router;
