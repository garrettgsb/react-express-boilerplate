const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/progress", (req, res) => {
    db.query("SELECT * FROM progress_tracker").then((results) => {
      res.send(results.rows);
    });
  });



  //Ability for students to say I'm done that step
  //Once students start learning path, highest step is 0
  //Once they complete the step it will add to highest step
  //Once they finish every step they get a completion badge
  router.post("/progress", (req, res) => {
    console.log("server")
    const params = [req.body.highest_steps]; //req.body from front-end

    db.query(`UPDATE progress_tracker
    SET highest_steps = highest_steps + $1
    WHERE users_id = 2`, params)
    .then((data) => {
      console.log(data);
      res.status(200);
    });
  })

  return router;
};
