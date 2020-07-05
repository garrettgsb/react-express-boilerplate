DROP TABLE IF EXISTS entries CASCADE;

CREATE TABLE entries (
  id SERIAL PRIMARY KEY NOT NULL,
  item_id INTEGER REFERENCES items(id),
  type VARCHAR(255) NOT NULL,
  duration_in_months INT NOT NULL,
  start_date INT NOT NULL,
  sms BOOLEAN NOT NULL,
  email BOOLEAN NOT NULL,
  days_prior INT NOT NULL
);