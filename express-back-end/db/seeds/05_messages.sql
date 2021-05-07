-- CREATE TABLE messages (
--   id SERIAL PRIMARY KEY NOT NULL,
--   friends_id INTEGER REFERENCES friends(id) ON DELETE CASCADE,
--   sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   message TEXT NOT NULL,
--   date TIMESTAMP NOT NULL
-- )


INSERT INTO messages 
(message, friends_id, sender_id) 
VALUES
('Hello Friend.', 1, 1),
('Oh hi there Mark.', 1, 1);
