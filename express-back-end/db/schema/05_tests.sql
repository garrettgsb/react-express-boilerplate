DROP TABLE IF EXISTS tests CASCADE;
CREATE TABLE tests (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  deck_id INTEGER REFERENCES decks(id),
  time_start TIMESTAMP,
  time_end TIMESTAMP
);