DROP TABLE IF EXISTS notifications CASCADE;

CREATE TABLE notifications (
  id serial PRIMARY KEY NOT NULL,
  user_id integer NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  message text NOT NULL,
  sent_at date NOT NULL,
  seen boolean NOT NULL
);
