const db = require('./index');

const getPosts = () => {
  return db.query(`SELECT * FROM posts ORDER BY created_at DESC;`)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log('DB error fetching posts: ' + err.message);
    });
};

const saveNewPost = (data) => {
  const { user_id, title, description, photo, topic } = data;
  console.log("data??", data);
  return db.query(
    `
    INSERT INTO posts (user_id, title, description, photo, topic, created_at ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
  `,

    [user_id, title, description, photo, topic, new Date()]
  )

    .then((res) => {
      console.log('res.rows[0]', res.rows[0]);
      return res.rows;
    })
    .catch((err) => {
      console.log('DB error inserting new post: ' + err.message);
    });
};

const getFilteredPosts = (topic) => {
  return db.query(`SELECT * FROM posts WHERE topic = $1 ORDER BY created_at DESC;`,
    [topic]
  )
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log('DB error fetching filtered posts: ' + err.message);
    });
}

const addLikesToPosts = (data) => {
  const {number_of_likes, post_id} = data;
  return db.query(`UPDATE likes
  SET number_of_likes = $1 
WHERE post_id = $2;`,
    [number_of_likes, post_id]
  )
  .then((res) => {
    return res.rows;
  })
  .catch((err) => {
    console.log('DB error fetching updated posts: ' + err.message);
  });
}

module.exports = {
  getPosts, saveNewPost, getFilteredPosts, addLikesToPosts
};
