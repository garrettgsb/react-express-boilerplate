DROP TABLE IF EXISTS transactions CASCADE;

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY NOT NULL,
  entry_id INTEGER REFERENCES entries(id),
  name VARCHAR(255) NOT NULL,
  amount INT NOT NULL,
  date INT NOT NULL
);