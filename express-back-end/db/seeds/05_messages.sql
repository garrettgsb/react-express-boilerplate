-- CREATE TABLE messages (
--   id SERIAL PRIMARY KEY NOT NULL,
--   friends_id INTEGER REFERENCES friends(id) ON DELETE CASCADE,
--   sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   message TEXT NOT NULL,
--   date TIMESTAMP NOT NULL
-- )


INSERT INTO messages 
(message, receiver_id, sender_id) 
VALUES
('Hello Friend.', 1, 2),
('Oh hi Mark.', 2, 1),
('What up?', 1, 2),
('Im overwhelmed and you cant help me.', 2, 1),
('You sure?', 1, 2),
('Yeah, very busy.', 2, 1),
('Ok sorrrrrry..', 1, 2),
('user 1 and 3', 1, 3),
('user 2 and 3', 2, 3),
('user 3 and 4', 3, 4),
('user 4 and 1', 4, 1);