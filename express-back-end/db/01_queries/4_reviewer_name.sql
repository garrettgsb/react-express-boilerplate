SELECT reviews.id AS review_id, users.username AS username
FROM users
JOIN reviews ON users.id = reviews.user_id;
