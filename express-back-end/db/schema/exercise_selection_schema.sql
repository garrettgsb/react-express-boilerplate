DROP TABLE IF EXISTS exercise_selections CASCADE;

CREATE TABLE exercise_selections (
  id SERIAL PRIMARY KEY NOT NULL,
  workout_id INTEGER REFERENCES workouts(id) ON DELETE CASCADE,
  exercise_id INTEGER REFERENCES exercises(id) ON DELETE CASCADE, 
  sets INTEGER,
  reps INTEGER,
  load FLOAT,
  rest_period INTEGER,
  duration INTEGER,
  notes TEXT
)