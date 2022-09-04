DROP TABLE IF EXISTS steps_to_resources CASCADE;

CREATE TABLE steps_to_resources (
  id SERIAL PRIMARY KEY NOT NULL,
  subjects_id INTEGER REFERENCES subjects(id) ON DELETE CASCADE,
  resources_id INTEGER REFERENCES resources(id) ON DELETE CASCADE
);