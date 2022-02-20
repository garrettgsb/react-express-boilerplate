const db = require('./index');

const getComments = () => {
  return db.query(`SELECT * FROM comments ORDER BY commented_at DESC;`)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log('DB error fetching posts: ' + err.message);
    });
};

module.exports = {
  getComments
};