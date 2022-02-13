
DROP TABLE IF EXISTS users CASCADE;

DROP TABLE IF EXISTS adventures CASCADE;

DROP TABLE IF EXISTS reservations CASCADE;

DROP TABLE IF EXISTS adventure_reviews CASCADE;

DROP TABLE IF EXISTS favourites CASCADE;

DROP TABLE IF EXISTS adventure_availibilties CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  pic VARCHAR(255) NOT NULL,
  about VARCHAR(255)
);

CREATE TABLE adventures (
   id SERIAL PRIMARY KEY NOT NULL,
   owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
   
   title VARCHAR(255) NOT NULL,
   description TEXT ,
   thumbnail_photo_url TEXT NOT NULL,
   cover_photo_url TEXT NOT NULL,
   prev_price INTEGER  NOT NULL DEFAULT 0,
   curr_price INTEGER  NOT NULL DEFAULT 0,
   accessible BOOLEAN,

   street VARCHAR(255) NOT NULL,
   city VARCHAR(255) NOT NULL,
   province_state VARCHAR(255) NOT NULL,
   post_code_zip VARCHAR(255) NOT NULL,
   country VARCHAR(255) NOT NULL,

   active BOOLEAN NOT NULL DEFAULT TRUE,
   is_full BOOLEAN NOT NULL DEFAULT FALSE,
   max_occupancy INTEGER  NOT NULL DEFAULT 1,
   season VARCHAR(255),
   category VARCHAR(255)
);

CREATE TABLE reservations (
   id SERIAL PRIMARY KEY NOT NULL,
   date DATE NOT NULL,
   adventure_id INTEGER REFERENCES adventures(id) ON DELETE CASCADE,
   guest_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
   total_guest INTEGER NOT NULL DEFAULT 1,
   payment_id VARCHAR(255) NOT NULL,
   total_price INTEGER NOT NULL
);

CREATE TABLE adventure_reviews (
   id SERIAL PRIMARY KEY NOT NULL,
   guest_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
   adventure_id INTEGER REFERENCES adventures(id) ON DELETE CASCADE,
   reservation_id INTEGER REFERENCES reservations(id) ON DELETE CASCADE,
   rating SMALLINT NOT NULL DEFAULT 1,
   comment TEXT
);

CREATE TABLE favourites (
   id SERIAL PRIMARY KEY NOT NULL,
   guest_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
   adventure_id INTEGER REFERENCES adventures(id) ON DELETE CASCADE
);

CREATE TABLE adventure_availibilties (
   id SERIAL PRIMARY KEY NOT NULL,
   adventure_id INTEGER REFERENCES adventures(id) ON DELETE CASCADE,
   day VARCHAR(255) NOT NULL,
   available BOOLEAN DEFAULT TRUE
);