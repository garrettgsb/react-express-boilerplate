-- Drop and recreate Tweeters table

DROP TABLE IF EXISTS tweeters CASCADE;
CREATE TABLE tweeters (
  id SERIAL PRIMARY KEY NOT NULL,
  tweeter_id BIGINT NOT NULL,
  screen_name VARCHAR(255) NOT NULL,
  location VARCHAR(255),
  profile_image_url VARCHAR(255)
);