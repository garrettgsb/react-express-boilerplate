const db = require("../connection");
//To get the watchlist data for the logged in user
const getUserWatchlist = (userid) => {
  return db
    .query(`SELECT movie_id AS id FROM user_watchlist where user_id= $1`, [
      `${userid}`,
    ])
    .then((result) => {
      if (result.rows) {
        return result.rows;
      }
      return null;
    })
    .catch((err) => {
      console.log(err.message);
    });
};
//To add a new movie to the watchlist for an user
const AddWatchlist = (userid, movie_id) => {
  return db
    .query(
      `INSERT INTO user_watchlist (user_id, movie_id) VALUES ($1, $2) RETURNING * `,
      [`${userid}`, `${movie_id}`]
    )
    .then((user_watchlist_data) => {
      return user_watchlist_data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

//To delete a movie from the user's watchlist
const removeUserWatchlist = (user_id, movie_id) => {
  return db
    .query(`DELETE FROM user_watchlist where user_id= $1 AND movie_id = $2`, [
      `${user_id}`,
      `${movie_id}`,
    ])
    .then((result) => {
      if (result.rows) {
        return result.rows;
      }
      return null;
    })
    .catch((err) => {
      console.log(err.message);
    });
};
module.exports = { getUserWatchlist, AddWatchlist, removeUserWatchlist };
