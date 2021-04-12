-- Drop and recreate Maps table

DROP TABLE IF EXISTS maps CASCADE;
CREATE TABLE maps (
  id SERIAL PRIMARY KEY NOT NULL,
  lat DECIMAL (8, 6),
  lng DECIMAL (9, 6),
  zoom INT DEFAULT 10
);