-- Reset database 
-- \i db/schema.sql 
-- \i db/seeds.sql 
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS runs CASCADE;
DROP TABLE IF EXISTS users_runs CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(255),
  gender VARCHAR(255),
  age INTEGER,
  planner BOOLEAN,
  runner BOOLEAN
);

CREATE TABLE runs (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  distance INTEGER NOT NULL,
  time TIME NOT NULL,
  date DATE NOT NULL,
  planner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  latitude DECIMAL(8,6) NOT NULL,
  longitude DECIMAL(9,6) NOT NULL,
  latitude_to DECIMAL(8,6) NOT NULL,
  longitude_to DECIMAL(9,6) NOT NULL
);

CREATE TABLE users_runs (
  id SERIAL PRIMARY KEY NOT NULL,
  time INTEGER NOT NULL,
  rating INTEGER,
  runner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  run_id INTEGER REFERENCES runs(id) ON DELETE CASCADE
);
