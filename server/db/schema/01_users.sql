-- Drop and recreate Users table

DROP TABLE IF EXISTS users
CASCADE;

CREATE TABLE users
(
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone_number VARCHAR(50) UNIQUE NOT NULL,
  type VARCHAR(50) NOT NULL DEFAULT 'c'
);


