-- Gets username associated with a review
SELECT * FROM reviews AND 
(SELECT users.username AS username
FROM users
JOIN reviews ON users.id = reviews.user_id);
