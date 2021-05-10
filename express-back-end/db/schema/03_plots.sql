DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE plots (
id SERIAL PRIMARY KEY NOT NULL,
user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
dimensions_length SMALLINT,
dimensions_width SMALLINT,
location VARCHAR(50) NOT NULL,
);