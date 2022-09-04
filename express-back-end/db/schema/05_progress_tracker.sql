DROP TABLE IF EXISTS progress_tracker CASCADE;

CREATE TABLE progress_tracker (
  id SERIAL PRIMARY KEY NOT NULL,
  users_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  resources_id INTEGER REFERENCES resources(id) ON DELETE CASCADE,
  steps_complete BOOLEAN NOT NULL
);