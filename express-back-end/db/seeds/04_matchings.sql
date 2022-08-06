INSERT INTO matchings (from_user_id, to_user_id, like_value, seen, matched_date) 
VALUES 
(1, 2, true, true, CURRENT_TIMESTAMP),
(2, 1, true, true, CURRENT_TIMESTAMP),
(2, 1, null, null, CURRENT_TIMESTAMP),
