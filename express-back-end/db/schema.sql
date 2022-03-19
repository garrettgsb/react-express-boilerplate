DROP TABLE IF EXISTS clients CASCADE;
DROP TABLE IF EXISTS professionals CASCADE;
DROP TABLE IF EXISTS appointments CASCADE;
DROP TABLE IF EXISTS specialties CASCADE;
DROP TABLE IF EXISTS professionals_specialties CASCADE;


CREATE TABLE clients (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  city VARCHAR(255),
  province VARCHAR(255),
  language_1 VARCHAR(255),
  language_2 VARCHAR(255),
  icon_url VARCHAR(255)
);

CREATE TABLE professionals (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  province VARCHAR(255) NOT NULL,
  language_1 VARCHAR(255) NOT NULL,
  language_2 VARCHAR(255),
  profession VARCHAR(255) NOT NULL,
  cost_per_session INTEGER,
  icon_url VARCHAR(255),
  description TEXT
);

CREATE TABLE appointments (
  id SERIAL PRIMARY KEY NOT NULL,
  client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
  professional_id INTEGER REFERENCES professionals(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  time TIME NOT NULL,
  description TEXT
);

CREATE TABLE specialties (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE professionals_specialties (
  id SERIAL PRIMARY KEY NOT NULL,
  professional_id INTEGER REFERENCES professionals(id) ON DELETE CASCADE,
  specialty_id INTEGER REFERENCES specialties(id) ON DELETE CASCADE
);