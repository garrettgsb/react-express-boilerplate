DROP TABLE IF EXISTS programs CASCADE;

CREATE TABLE programs (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, 
  name VARCHAR(255) NOT NULL,
  description TEXT,
  start_date DATE,
  end_date DATE,
  public BOOLEAN DEFAULT true,
  author VARCHAR(255) DEFAULT ""
)