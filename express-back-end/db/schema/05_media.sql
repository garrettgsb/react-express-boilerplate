DROP TABLE IF EXISTS media CASCADE;

CREATE TABLE media (
  id serial PRIMARY KEY NOT NULL,
  tour_id integer NOT NULL REFERENCES tours (id) ON DELETE CASCADE,
  src varchar(255) NOT NULL
);
