DROP TABLE IF EXISTS users CASCADE;
 
CREATE TABLE users (
 id SERIAL PRIMARY KEY NOT NULL,
 name VARCHAR(50),
 user_name VARCHAR(50),
 email VARCHAR(50),
 password VARCHAR(50),
 phone_number VARCHAR(50)
);
