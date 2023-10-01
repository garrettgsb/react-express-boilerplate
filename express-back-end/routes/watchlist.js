const express = require("express");
const router = express.Router();
const watchlistQueries = require("../db/queries/watchlist");

//api to get user's watchlist
router.get("/", (req, res) => {
  watchlistQueries
    .getUserWatchlist("2") // hard coded as login is yet to be completed. needs replacement with req.session.id
    .then((watchlist) => {
      res.json({ watchlist });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
//api to add a movie to the user's watchlist
router.post("/add/:movie_id", (req, res) => {
  watchlistQueries
    .AddWatchlist("2", req.params.movie_id) // hard coded as login is yet to be completed. needs replacement with req.session.id
    .then((watchlist) => res.json({ watchlist }))
    .catch((err) => {
      res.status(400).send(err);
    });
});
//api to remove a movie from user's watchlist
router.post("/delete/:movie_id", (req, res) => {
  watchlistQueries
    .removeUserWatchlist("2", req.params.movie_id) // hard coded as login is yet to be completed. needs replacement with req.session.id
    .then((watchlist) => res.json({ watchlist }))
    .catch((err) => {
      res.status(400).send(err);
    });
});
module.exports = router;
