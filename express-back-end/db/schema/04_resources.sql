DROP TABLE IF EXISTS resources CASCADE;

CREATE TABLE resources (
  id SERIAL PRIMARY KEY NOT NULL,
  step_number INTEGER NOT NULL,
  step_description VARCHAR(255) NOT NULL,
  article_url VARCHAR(255),
  photo_url VARCHAR(255),
  video_url VARCHAR(255)
);