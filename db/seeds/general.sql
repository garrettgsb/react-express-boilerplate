INSERT INTO photographers (name, email, city, phone_number, photo1_url, photo2_url, photo3_url)
VALUES
('Alice Anderson', 'alice@gmail.com', 'Victoria', 2501111111, 'https://www.westjetmagazine.com/wp-content/uploads/2017/09/NorthernLightsiStock.jpg', 'https://www.projectinspo.com/wp-content/uploads/2016/02/alaska-northern-lights-2000-copy-copy-770x390.jpg', 'https://touristjourney.com/wp-content/uploads/2020/07/How-to-See-the-Northern-Lights-in-Iceland-scaled.jpg'),
('Betty Boop', 'betty@outlook.com', 'Calgary', 4031111111, 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60'),
('Charlie Chapman', 'charlie@aol.com', 'Edmonton', 8251111111, 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1568607689150-17e625c1586e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1504858700536-882c978a3464?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5vcnRoZXJuJTIwbGlnaHRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'),
('Dave Diggs', 'davey09@hotmail.com', 'Penticton', 7781111111, 'https://images.unsplash.com/photo-1430132594682-16e1185b17c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fG5vcnRoZXJuJTIwbGlnaHRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1472419551702-dc4862cad8f9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5vcnRoZXJuJTIwbGlnaHRzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60', 'https://pbs.twimg.com/media/B8Q4YScCEAEL1cL.jpg'),
('Ellie Eggerton', 'ellie@gmail.com', 'Vancouver', 6041111111, 'https://twistedsifter.com/wp-content/uploads/2017/05/33-best-auroras-nasa-has-ever-featured-3.jpg', 'https://adventures.com/media/6169/how-to-take-pictures-of-the-northern-lights-camera-tripod-4.jpg', 'https://lp-cms-production.imgix.net/news/2017/12/northern-lights.jpg');

INSERT INTO locations (location_name, coordinates)
VALUES
('Banff', '51.1784° N, 115.5708° W'),
('Moberly Lake', '55.8233° N, 121.7889° W'),
('Northern Lights Centre','60.2343° N, 128.3215° W'),
('High Level','58.5071° N, 117.1403° W');

INSERT INTO auroras (forecast, location, strength) 
VALUES
('Clear', 'Banff National Park', 3),
('Cloudy', 'Moberly Lake Park', 2),
('Sunny', 'Yukon', 5),
('Clear', 'High Level', 4);

INSERT INTO auroras_locations (aurora_id, location_id)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4);

INSERT INTO meetups (location_id, date, time)
VALUES
(1, 2021-04-27, 22:30:00),
(3, 2021-05-21, 22:00:00),
(2, 2021-04-15, 01:20:00),
(4, 2021-03-14, 23:35:00);

INSERT INTO meetup_photographers (meetup_id, photographer_id)
VALUES
(1, 1),
(1, 5),
(2, 2),
(2, 4),
(3, 5),
(3, 3),
(4, 1),
(4, 2);

INSERT INTO messages (photographer_id, meetup_id, message, timestamp)
VALUES
(1, 3, 'I hope the coditions are great!', 2021-04-13 12:02:25),
(2, 1, 'Woooo! I love the northern lights', 2021-04-01 09:25:20),
(2, 2, 'I can hardly wait to try out my new lens!', 2021-04-12 17:20:20),
(3, 1, 'Should be a nice shoot!', 2021-04-26 20:01:00),
(4, 2, 'Too bad it got cloudy! :(', 2021-04-16 09:20:00),
(5, 4, 'This was a great shoot, thank you for coming!', 2021-03-15 14:25:00);

-- STRETCH SEEDS

-- INSERT INTO equipment (photographer_id, camera_body, lens1, lens2)
-- VALUES
-- (1, 'Canon T3i', 'Canon 14mm', 'Canon 35mm'),
-- (2, 'Canon Mark III', 'Canon 24-105mm', 'Canon 50mm'),
-- (3, 'Panasonic G7', 'Lumix 20mm', 'Lumix 14-150mm'),
-- (4, 'Nikon Z6', 'Nikon 35mm', 'Nikon 18-140mm'),
-- (5, 'Sony Alpha 33', 'Tamron 28-200mm', 'Sony 18-35mm');

-- INSERT INTO endorsements (description, photographer_id)
-- VALUES
-- ('So glad I met Betty, she was so fun to photograph with!', 4),
-- ('I learned so much working with Dave', 1),
-- ('Cannot wait to meet up with Ellie again', 3),
-- ('Charlie is a fantastic photography partner', 2),
-- ('Alice is so talented', 5);

-- INSERT INTO photographers_endorsements (photographer_id, endorsement_id)
-- VALUES
-- (2, 1),
-- (4, 2),
-- (5, 3),
-- (3, 4),
-- (1, 5);

-- INSERT INTO location_ratings (location_id, number_stars) 
-- VALUES
-- (1, 4),
-- (2, 5),
-- (3, 3),
-- (1, 5),
-- (2, 5),
-- (3, 4);