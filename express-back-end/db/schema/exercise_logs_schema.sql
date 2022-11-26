DROP TABLE IF EXISTS exercise_logs CASCADE;

CREATE TABLE exercise_logs (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  exercise_id INTEGER REFERENCES exercises(id) ON DELETE CASCADE,
  exercise_selection_id INTEGER REFERENCES exercise_selections(id) ON DELETE CASCADE,
  sets INTEGER,
  reps INTEGER,
  load FLOAT
)