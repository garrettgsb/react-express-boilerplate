
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS user_photos CASCADE;
DROP TABLE IF EXISTS messages CASCADE;
DROP TABLE IF EXISTS matching CASCADE;
DROP TABLE IF EXISTS block_user CASCADE;

SET timezone = 'America/Los_Angeles';

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  bio TEXT NOT NULL,
  age INTEGER NOT NULL,
  gender TEXT NOT NULL,
  location VARCHAR(255) NOT NULL,
  height_in_cm INTEGER NOT NULL,
  photo_id BOOLEAN NOT NULL,
  ethnicity VARCHAR(255) NOT NULL,
  children VARCHAR(255) NOT NULL,
  education VARCHAR(255) NOT NULL,
  occupation VARCHAR(255) NOT NULL,
  preference_min_age INTEGER NOT NULL,
  preference_max_age INTEGER NOT NULL,
  preference_location TEXT NOT NULL,
  preference_gender TEXT NOT NULL,
 preference_min_height INTEGER NOT NULL,
  preference_max_height INTEGER NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true
);

CREATE TABLE user_photos (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  is_profile BOOLEAN NOT NULL DEFAULT false
);


CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  from_user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  to_user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  message VARCHAR(255) NOT NULL,
  message_seen BOOLEAN NOT NULL DEFAULT false,
  date_sent TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
  
);

CREATE TABLE matching (
  id SERIAL PRIMARY KEY NOT NULL,
  to_user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  like_value BOOLEAN NOT NULL DEFAULT false,
  seen BOOLEAN NOT NULL DEFAULT false
 );

CREATE TABLE block_user (
  id SERIAL PRIMARY KEY NOT NULL,
  blocked_by_user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
   blocked_user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  
 );
