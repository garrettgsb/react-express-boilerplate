const Express = require("express");
const router = Express.Router();
const { StoryCategories } = require("../models");

// GET /api/story-categories
router.get("/", (req, res) => {
  StoryCategories.findAll()
    .then((user) => {
      const data = {
        user,
        message: "Get all user",
      };
      res.send(data);
    })
    .catch((err) => console.log("err:", err));
});


// GET all entries for a category from story_categories ---- /api/story-categories/:id
router.get("/:id", (req, res) => {
  const category_id = req.params.id;
  StoryCategories.find({ category_id })
    .then((entries) => {
      res.send(entries);
    })
    .catch((err) => console.log("err:", err));
});

module.exports = router;
