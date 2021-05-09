-- DROP TABLE IF EXISTS users CASCADE;
-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY NOT NULL,
--   username VARCHAR(255) NOT NULL,
--   first_name VARCHAR(255) NOT NULL,
--   last_name VARCHAR(255) NOT NULL,
--   email VARCHAR(55) NOT NULL,
--   password VARCHAR(55) NOT NULL
-- );

-- INSERT USERS
INSERT INTO users 
(username, first_name, last_name, email, password)
VALUES
('Adamski','Adam','Hart',6042347884,'password'),
('SeriusLL','James','B',6042555584,'password'),
('SunnyD','Sunny','D',6044444484,'password'),
('TheRock','The','Rock',6049999999,'password'),
('DaveChapelle','Dave','Chapelle',6049999999,'password'),
('CaptainHook','Captain','Hook',6049999999,'password'),
('JackSparrow','Jack','Sparrow',6049999999,'password'),
('Chavez','Chavez','Chavez',6049999999,'password');