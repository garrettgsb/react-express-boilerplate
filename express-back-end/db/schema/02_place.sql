-- Drop and recreate Places table

DROP TABLE IF EXISTS places CASCADE;
CREATE TABLE places (
  id SERIAL PRIMARY KEY NOT NULL,
  type VARCHAR(255),
  name VARCHAR(255),
  full_name VARCHAR(255),
  country_code VARCHAR(255),
  country VARCHAR(255)
);