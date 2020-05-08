DROP TABLE IF EXISTS tours CASCADE;

CREATE TABLE tours (
  id serial PRIMARY KEY NOT NULL,
  host_id integer NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  title varchar(255) NOT NULL,
  description text,
  city varchar(255) NOT NULL,
  long_lat varchar(255) NOT NULL,
  date_time date NOT NULL,
  duration integer NOT NULL,
  min_users integer NOT NULL,
  max_users integer NOT NULL,
  tour_status varchar(255) NOT NULL,
  price decimal(10, 2) NOT NULL
);
