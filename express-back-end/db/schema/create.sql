DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS buildings CASCADE;
DROP TABLE IF EXISTS areas CASCADE;
DROP TABLE IF EXISTS favourites CASCADE;
DROP TABLE IF EXISTS amenities CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP
);

CREATE TABLE areas (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE buildings (
  id SERIAL PRIMARY KEY NOT NULL,
  area_id INTEGER REFERENCES areas(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  building_id INTEGER REFERENCES buildings(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  area_id INTEGER REFERENCES areas(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  building_rating INTEGER NOT NULL,
  area_rating INTEGER NOT NULL,
  comment TEXT,
  landlord_rating BOOLEAN,
  recommend_to_friend BOOLEAN
);


CREATE TABLE favourites (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  building_id INTEGER REFERENCES buildings(id) ON DELETE CASCADE,
  is_active BOOLEAN
);

CREATE TABLE amenities (
  id SERIAL PRIMARY KEY NOT NULL,
  area_id INTEGER REFERENCES areas(id) ON DELETE CASCADE,
  name VARCHAR(255),
  type VARCHAR(255),
  image_url VARCHAR(255),
  longitude FLOAT NOT NULL,
  latitude FLOAT NOT NULL
);

\COPY amenities
FROM 'seeds/amenities-data.csv'
DELIMITER ','
CSV HEADER;

\COPY amenities(area_id, name, type, image_url, latitude, longitude) FROM 'seeds/amenities-data.csv' DELIMITER ',' CSV HEADER;
