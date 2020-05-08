DROP TABLE IF EXISTS bookings CASCADE;

CREATE TABLE bookings (
  id serial PRIMARY KEY NOT NULL,
  host_id integer NOT NULL REFERENCES tours (id) ON DELETE CASCADE,
  user_id integer NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  comment text,
  rating integer,
  created_at date NOT NULL,
  status varchar(255) NOT NULL
);
