  DROP TABLE IF EXISTS exercises CASCADE;

CREATE TABLE exercises (
  id SERIAL PRIMARY KEY NOT NULL,
  workout_id INTEGER REFERENCES workouts(id) ON DELETE CASCADE,
  name VARCHAR(255),
  type VARCHAR(255),
  muscle VARCHAR(255),
  equipment VARCHAR(255),
  difficulty VARCHAR(255),
  image VARCHAR(255),
  instructions TEXT,
  sets INTEGER,
  reps INTEGER,
  load REAL,
  rest_period INTEGER,
  duration INTEGER,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CLOCK_TIMESTAMP()
)