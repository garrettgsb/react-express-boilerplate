DROP TABLE IF EXISTS ratings CASCADE;
CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  deck_id INTEGER REFERENCES decks(id),
  rating INTEGER
);