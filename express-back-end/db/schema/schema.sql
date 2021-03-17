DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS plants CASCADE;
DROP TABLE IF EXISTS wishlist CASCADE;
DROP TABLE IF EXISTS tasks CASCADE;


<<<<<<< HEAD
=======

>>>>>>> 0a3a7bfa5e4f0847eb389c14ac81de9171710eeb
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(100),
  password VARCHAR(100),
  authID VARCHAR(255),
);

CREATE TABLE wishlist (
   id SERIAL PRIMARY KEY NOT NULL,
   user_id INTEGER REFERENCES user(id) ON DELETE CASCADE,
   species_id INTEGER NOT NULL, 
)

CREATE TABLE species (
  id SERIAL PRIMARY KEY NOT NULL,
  common_name VARCHAR(255) NOT NULL,
  scientific_name VARCHAR(255) NOT NULL,
  photo_url VARCHAR(255),
  description TEXT,
  watering_instructions VARCHAR(255) NOT NULL,
  watering_requirement_rating INTEGER NOT NULL,
  sunlight_requirement_rating INTEGER NOT NULL,
  difficulty_rating INTEGER NOT NULL,
  temperature_requirements VARCHAR(100) NOT NULL,
  fertilizer_requirements VARCHAR(100) NOT NULL,
  poison_for_pets BOOLEAN NOT NULL DEFAULT FALSE,
);

CREATE TABLE plant (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  species_id INTEGER REFERENCES species(id) ON DELETE NULL,
  nickname VARCHAR(100),
  is_dead BOOLEAN NOT NULL DEFAULT FALSE,
  cause_of_death TEXT,
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY NOT NULL,
  task TEXT,
  plant_id INTEGER REFERENCES plants(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES user(id) ON DELETE CASCADE,
  task_date DATE NOT NULL,
  task_complete BOOLEAN NOT NULL DEFAULT FALSE,
)
