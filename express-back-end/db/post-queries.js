const db = require('./index');

const getPosts = () => {
  return db.query(`SELECT * FROM posts;`)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log('DB error fetching posts: ' + err.message);
    });
};


module.exports = {
  getPosts
};
