DROP TABLE IF EXISTS species CASCADE;
CREATE TABLE species ( 
  id SERIAL PRIMARY KEY NOT NULL,
  scientific_name VARCHAR(255) NOT NULL,
  common_name VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  photo TEXT NOT NULL, 
  light_level VARCHAR(255) NOT NULL,
  soil_type VARCHAR(255) NOT NULL,
  toxic BOOLEAN NOT NULL,
  difficulty_level VARCHAR(255) NOT NULL,
  watering_interval VARCHAR(255) NOT NULL,
);