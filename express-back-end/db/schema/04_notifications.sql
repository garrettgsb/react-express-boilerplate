DROP TABLE IF EXISTS notifcations CASCADE;

CREATE TABLE notifcations (
  id serial PRIMARY KEY NOT NULL,
  user_id integer NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  message text NOT NULL,
  sent_at date NOT NULL,
  seen boolean NOT NULL
);
