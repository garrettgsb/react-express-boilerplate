DROP TABLE IF EXISTS exercises CASCADE;

CREATE TABLE exercises (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  type VARCHAR(255),
  muscle VARCHAR(255),
  equipment VARCHAR(255),
  difficulty VARCHAR(255),
  image VARCHAR(255),
  instructions TEXT
)