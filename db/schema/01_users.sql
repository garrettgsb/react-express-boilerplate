DROP TABLE IF EXISTS users CASCADE;
 
CREATE TABLE users (
 id SERIAL PRIMARY KEY NOT NULL,
 first_name VARCHAR(50),
 last_name VARCHAR(50),
 email VARCHAR(50),
 password VARCHAR(50),
 phone_number VARCHAR(50),
 country VARCHAR(50),
province VARCHAR(50),
city VARCHAR(50),
street VARCHAR(50),
postal VARCHAR(50)
);
