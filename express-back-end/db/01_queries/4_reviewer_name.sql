-- Gets username associated with a review
-- SELECT * FROM reviews AND 
-- SELECT reviews.id AS review_id, users.username AS username
-- FROM users
-- JOIN reviews ON users.id = reviews.user_id;

SELECT reviews.id AS review_id, reviews.building_id AS building_id, reviews.title AS title, reviews.building_rating AS building_rating, reviews.comment AS comment, reviews.landlord_rating AS landlord_rating, reviews.recommend_to_friend AS recommend_to_friend, users.username AS username
FROM users
JOIN reviews ON users.id = reviews.user_id; 