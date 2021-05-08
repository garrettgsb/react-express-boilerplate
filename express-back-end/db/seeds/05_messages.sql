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
('Oh hi Mark.', 1, 1),
('What up?', 1, 1),
('Im overwhelmed and you cant help me.', 1, 1),
('You sure?', 1, 1),
('Yeah, very busy.', 1, 1),
('Ok sorrrrrry..', 1, 1);
