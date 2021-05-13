DROP TABLE IF EXISTS friends CASCADE;
CREATE TABLE friends (
  id SERIAL PRIMARY KEY NOT NULL,
  first_user_id INTEGER REFERENCES users(id) NOT NULL,
  second_user_id INTEGER REFERENCES users(id) NOT NULL,
  u_user_ids VARCHAR(15),
  CONSTRAINT UC_friends UNIQUE(first_user_id, second_user_id)

);

