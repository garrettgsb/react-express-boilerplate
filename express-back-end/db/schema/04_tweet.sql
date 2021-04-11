-- Drop and recreate Tweets table

DROP TABLE IF EXISTS tweets CASCADE;
CREATE TABLE tweets (
  id SERIAL PRIMARY KEY NOT NULL,
  tweet_id INT NOT NULL,
  created_at_date TIMESTAMP NOT NULL,
  text TEXT,
  tweeter_id INT REFERENCES tweeters(id) ON DELETE CASCADE,
  place_id INT REFERENCES places(id) ON DELETE CASCADE,
  hashtag VARCHAR(255) NOT NULL,
  map_id INT NOT NULL REFERENCES maps(id) ON DELETE CASCADE
);