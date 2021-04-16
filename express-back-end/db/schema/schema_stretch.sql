-- DROP TABLE IF EXISTS endorsements CASCADE;
-- DROP TABLE IF EXISTS photographers_endorsements CASCADE;
-- DROP TABLE IF EXISTS equipment CASCADE;
-- DROP TABLE IF EXISTS location_ratings CASCADE;

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