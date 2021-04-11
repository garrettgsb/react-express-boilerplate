DROP TABLE IF EXISTS photographers CASCADE;
-- DROP TABLE IF EXISTS endorsements CASCADE;
-- DROP TABLE IF EXISTS photographers_endorsements CASCADE;
DROP TABLE IF EXISTS locations CASCADE;
DROP TABLE IF EXISTS meetups CASCADE;
DROP TABLE IF EXISTS auroras CASCADE;
DROP TABLE IF EXISTS meetup_photographers CASCADE;
DROP TABLE IF EXISTS auroras_locations CASCADE;
DROP TABLE IF EXISTS messages CASCADE;
-- DROP TABLE IF EXISTS equipment CASCADE;
-- DROP TABLE IF EXISTS location_ratings CASCADE;


CREATE TABLE photographers (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL, 
  email VARCHAR(255) NOT NULL,
  city VARCHAR(255),
  phone_number VARCHAR(255) NOT NULL,
  photo1_url VARCHAR(255) NOT NULL,
  photo2_url VARCHAR(255) NOT NULL,
  photo3_url VARCHAR(255) NOT NULL
);


CREATE TABLE locations (
  id SERIAL PRIMARY KEY NOT NULL,
  location_name VARCHAR(255) NOT NULL,
  coordinates VARCHAR(255) NOT NULL
);

CREATE TABLE meetups (
  id SERIAL PRIMARY KEY NOT NULL,
  location_id INTEGER REFERENCES locations(id) ON DELETE CASCADE
  date DATE NOT NULL,
  time INTEGER NOT NULL
);

CREATE TABLE auroras (
  id SERIAL PRIMARY KEY NOT NULL,
  forecast VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  strength INTEGER NOT NULL
);

CREATE TABLE auroras_locations (
  id SERIAL PRIMARY KEY NOT NULL,
  aurora_id INTEGER REFERENCES auroras(id) ON DELETE CASCADE,
  location_id INTEGER REFERENCES locations(id) ON DELETE CASCADE
);

CREATE TABLE meetup_photographers (
  id SERIAL PRIMARY KEY NOT NULL,
  meetup_id INTEGER REFERENCES meetups(id) ON DELETE CASCADE,
  photographer_id INTEGER REFERENCES photographers(id) ON DELETE CASCADE
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  photographer_id INTEGER REFERENCES photographers(id) ON DELETE CASCADE,
  meetup_id, INTEGER REFERENCES meetups(id) ON DELETE CASCADE,
  message VARCHAR(255) NOT NULL,
  timestamp TIMESTAMP NOT NULL
);

-- STRETCH TABLES

-- CREATE TABLE equipment (
--   id SERIAL PRIMARY KEY NOT NULL,
--   photographer_id INTEGER REFERENCES photographers(id) ON DELETE CASCADE,
--   camera_body VARCHAR(255),
--   lens1 VARCHAR(255),
--   lens2 VARCHAR(255)
-- );

-- CREATE TABLE location_ratings (
--   id SERIAL PRIMARY KEY NOT NULL,
--   location_id INTEGER REFERENCES locations(id) ON DELETE CASCADE,
--   number_stars INTEGER NOT NULL
-- );

-- photographer_id here is the *one endorsing another photographer* --
-- CREATE TABLE endorsements (
--   id SERIAL PRIMARY KEY NOT NULL,
--   description VARCHAR(255),
--   photographer_id INTEGER REFERENCES photographers(id)
-- );

-- photographer_id here is the *one being endorsed* --
-- CREATE TABLE photographers_endorsements (
--   id SERIAL PRIMARY KEY NOT NULL,
--   photographer_id INTEGER REFERENCES photographers(id),
--   endorsement_id INTEGER REFERENCES endorsements(id)
-- );