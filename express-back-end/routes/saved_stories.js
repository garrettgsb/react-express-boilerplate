const Express = require("express");
const router = Express.Router();
const {Stories, SavedStories } = require("../models");

router.get("/user/:id/saved-stories", (req, res) => {
  console.log(req.params.id);
  const userId = req.params.id;
  SavedStories.find({ userId })
    .then((user) => {
      console.log(user);
      res.send(user);
    })
    .catch((err) => console.log("err:", err));
});


module.exports = router;
