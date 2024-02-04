const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10; 

// Simulated user database
const users = [];

// POST route for user signup
router.post('/', async (req, res) => {
  const { userName, password, email, firstName, lastName, phoneNumber } = req.body;

  // Check if the user already exists
  const existingUser = users.find(user => user.userName === userName);
  if (existingUser) {
    return res.status(400).json({ message: "Username already exists" });
  }

  // Hash the password
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user object
    const newUser = {
      userName,
      password: hashedPassword,
      email,
      firstName,
      lastName,
      phoneNumber
    };

    // Add the new user to the database
    users.push(newUser);

    // Respond with a success message
    res.status(201).json({ message: "Signup successful", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error hashing password" });
  }
});

module.exports = router;
