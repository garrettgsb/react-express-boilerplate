-- Drop and recreate Stores table

DROP TABLE IF EXISTS stores
CASCADE;

CREATE TABLE stores
(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) UNIQUE NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  image TEXT NOT NULL,
  address TEXT NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

