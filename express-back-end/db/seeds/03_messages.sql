INSERT INTO messages (from_user_id, to_user_id, message, message_seen, date_sent) 
VALUES 
(1, 2, 'hey from id.1 to id.2', false, CURRENT_TIMESTAMP),
(2, 1, 'hey from id.2 to id.1', false, CURRENT_TIMESTAMP),
(1, 2, 'hey again from id.1 to id.2', false, CURRENT_TIMESTAMP);

