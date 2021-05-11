-- DROP TABLE IF EXISTS users CASCADE;
-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY NOT NULL,
--   username VARCHAR(255) NOT NULL,
--   first_name VARCHAR(255) NOT NULL,
--   last_name VARCHAR(255) NOT NULL,
--   email VARCHAR(55) NOT NULL,
--   password VARCHAR(55) NOT NULL,
--   profile_pic VARCHAR(55) NOT NULL,
--   cool_fact VARCHAR(55) NOT NULL,
--   member_since DATE
-- );

-- INSERT USERS
INSERT INTO users 
(username, first_name, last_name, email, password, profile_pic, cool_fact)
VALUES
('Adamski','Adam','Hart',6042347884,'password', 'https://scontent.fyvr4-1.fna.fbcdn.net/v/t31.18172-8/901808_10203932040960588_8095558117763463006_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=LqTvOiXmUm8AX9aQ_LW&_nc_ht=scontent.fyvr4-1.fna&oh=7a5bb69adba0c87c5511a4d06e4d6988&oe=60C25F14', 'Food can be art!'),
('SeriusLL','James','B',6042555584,'password', 'https://ca.slack-edge.com/T2G8TE2E5-U01P0RMM547-daddce1971a8-512', 'Im a pirate!'),
('SunnyD','Sunny','D',6044444484,'password', 'https://ca.slack-edge.com/T2G8TE2E5-U01Q45EC85N-0d811cbe0e51-512', 'I write code'),
('TheRock','The','Rock',6049999999,'password', 'https://static.wikia.nocookie.net/prowrestling/images/a/ad/Wwe_the_rock_png_by_double_a1698_day9ylt-pre_%281%29.png/revision/latest?cb=20190225014047', 'Im a nice guy'),
('DaveChapelle','Dave','Chapelle',6049999999,'password', 'https://cdn.britannica.com/96/194196-050-90AA3813/Dave-Chappelle-2006.jpg', 'Just sprinkle some crack on him and get out of here..'),
('CaptainHook','Captain','Hook',6049999999,'password', 'https://static.wikia.nocookie.net/jakeandtheneverlandpirates/images/7/7d/Captain_Hook-Profile.jpg/revision/latest?cb=20191007034722', 'Why am I the villain in this story?'),
('JackSparrow','Jack','Sparrow',6049999999,'password', 'https://ohmy.disney.com/wp-content/uploads/2014/10/Q3-Jack-Sparrow.png', 'But you have heard of me.');