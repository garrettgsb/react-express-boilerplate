
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS user_photos CASCADE;
DROP TABLE IF EXISTS messages CASCADE;
DROP TABLE IF EXISTS matchings CASCADE;
DROP TABLE IF EXISTS block_users CASCADE;

SET timezone = 'America/Los_Angeles';

-- drinking
-- id0 - never
-- 1=- sometimes
-- 2 =yes

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(20) NOT NULL,
  bio TEXT NOT NULL,
  age INTEGER NOT NULL,
  gender_id TEXT NOT NULL,
  location VARCHAR(255) NOT NULL,
  height_in_cm INTEGER NOT NULL,
  education VARCHAR(255) NOT NULL,
  occupation VARCHAR(255) NOT NULL,
  drink_id INTEGER NOT NULL,
  exercise_id INTEGER NOT NULL, 
  dating_goal_id INTEGER NOT NULL, 
  --  {dont know yet, short-term, long-term, life-partner,}
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- pref={state.preferences} - when render preferences from app.js
-- const [pref, setPref] = useState(props.pref); inside preferences
CREATE TABLE preferences (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  min_age INTEGER NOT NULL DEFAULT 18,
  max_age INTEGER NOT NULL DEFAULT 80,
  location TEXT NOT NULL DEFAULT 'Earth',
  min_height_in_cm INTEGER NOT NULL DEFAULT 130,
  max_height_in_cm INTEGER NOT NULL DEFAULT 200,
  gender_id INTEGER REFERENCES genders(id) ON DELETE CASCADE DEFAULT NULL,
  drink_id INTEGER REFERENCES drinks(id) ON DELETE CASCADE DEFAULT 0,
  exercise_id INTEGER REFERENCES exercises(id) ON DELETE CASCADE DEFAULT 0,
  dating_goal_id INTEGER REFERENCES dating_goals(id) ON DELETE CASCADE DEFAULT 0
);


CREATE TABLE genders (
  id SERIAL PRIMARY KEY NOT NULL,
  value TEXT NOT NULL 
);

-- INSERT into GENDERS (anyone, female, male, other)
-- values (0)

CREATE TABLE drinks (
  id SERIAL PRIMARY KEY NOT NULL,
  value TEXT NOT NULL
);

CREATE TABLE exercises (
  id SERIAL PRIMARY KEY NOT NULL, 
  value TEXT NOT NULL 
);

CREATE TABLE dating_goals (
  id SERIAL PRIMARY KEY NOT NULL, 
  value TEXT NOT NULL 
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

CREATE TABLE matchings (
  id SERIAL PRIMARY KEY NOT NULL,
  from_user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  to_user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  like_value BOOLEAN DEFAULT NULL,
  seen BOOLEAN NOT NULL DEFAULT false,
  matched_date TIMESTAMP
 );

CREATE TABLE block_users (
  id SERIAL PRIMARY KEY NOT NULL,
  blocked_by_user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  blocked_user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
 );
