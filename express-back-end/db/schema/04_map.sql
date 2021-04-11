-- Drop and recreate Maps table

DROP TABLE IF EXISTS maps CASCADE;
CREATE TABLE maps (
  lat DECIMAL (8, 6),
  lng DECIMAL (9, 6),
  zoom INT DEFAULT 10
);