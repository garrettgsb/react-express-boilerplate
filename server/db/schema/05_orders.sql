-- Drop and recreate orders table

DROP TABLE IF EXISTS orders
CASCADE;

CREATE TABLE orders
(
  id SERIAL PRIMARY KEY NOT NULL,
  time_created TIMESTAMP NOT NULL,
  total_price FLOAT DEFAULT 0,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);



