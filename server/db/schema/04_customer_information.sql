-- Drop and recreate customer_information table

DROP TABLE IF EXISTS customer_information
CASCADE;

CREATE TABLE customer_information
(
  id SERIAL PRIMARY KEY NOT NULL,
  current_beans INTEGER NOT NULL DEFAULT 0,
  lifetime_beans INTEGER NOT NULL DEFAULT 0,
  tier VARCHAR(50) NOT NULL,
  accelerator FLOAT NOT NULL DEFAULT 1,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);



