const express = require('express');
const router = express.Router();
const db = require('../lib/db');

// GET route to show logged in user profile (Completed)
router.get("/profile/:userID", (req, res) => {
  return db.query(
    `SELECT * FROM users JOIN posts ON users.id = user_id WHERE users.id = $1;`, [req.params.userID])
  .then(data => {
    res.json(data.rows)
  })
  .catch(err => {
    res.status(500, "Could Not Complete Request")
  })
});

//    ******* Incomplete ********      POST route to change their name on profile   
router.post("/profile/:userID", (req, res) => {
  return db.query(
  `UPDATE users SET name = $1 WHERE users.id = $2`, [req.params.name, req.params.userID]) //req.body.name for the name? since were taking the new form data to replace the name in the databse
  .then(data => {
    res.json(data.rows)
  })
  .catch(err => {
    res.status(500, "Could Not Complete Request")
  })
});

// POST route to submit login information to the database (redirect to homepage)
router.post("/login", (req, res) => {
  
});





// POST route to submit registration information to the database (redirect to homepage)
router.post("/register", (req, res) => {
  
});



// POST route to log a user out (redirect to homepage)
router.post("/logout", (req, res) => {

});



module.exports = router;




// **GET**
//    /
// **Show moods (less of route more of react render)**
// Query user DB
// If user cookie exists, show user home page (profile top)
// If not, show home page without user details (login/register button top)
// Show login/register button if no cookie

//    /profile/:userID
// Query from users DB
// If userID matches in DB
// Show user’s profile
// If not (doesn’t really matter since you won’t see the profile page if not logged in)
// Show login page



//    /login
// Show login/register page 
// If userID
// Login button won't be shown on homepage
// If not userID
// Continue render of login page

//    /register
// Show login/register page


//    /moods/:id
// Have a static button that always links to a mood
// Each button corresponds with a static route, rather than being dynamically rendered
// The value of the html can be linked to the mood
// Back end would have query to the category in resources table to render results of mood

//    /profile/:userID/:postID/edit
// Gets information from DB for particular id and display on screen
