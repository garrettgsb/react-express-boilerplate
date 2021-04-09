INSERT INTO photographers (name, email, city, phone_number)
VALUES
('Alice Anderson', 'alice@gmail.com', 'Victoria', 2501111111);
('Betty Boop', 'betty@outlook.com', 'Calgary', 4031111111);
('Charlie Chapman', 'charlie@aol.com', 'Edmonton', 8251111111);
('Dave Diggs', 'davey09@hotmail.com', 'Penticton', 7781111111);
('Ellie Eggerton', 'ellie@gmail.com', 'Vancouver', 6041111111);

INSERT INTO endorsements (text, photographer_id)
VALUES
('So glad I met Betty, she was so fun to photograph with!', 4);
('I learned so much working with Dave', 1);
("Can't wait to meet up with Ellie again", 3);
('Charlie is a fantastic photography partner', 2);
('Alice is so talented', 5);

INSERT INTO photographers_endorsements (photographer_id, endorsement_id)
VALUES
(2, 1);
(4, 2);
(5, 3);
(3, 4);
(1, 5);

INSERT INTO albums (photos, photographer_id)
VALUES
('https://www.westjetmagazine.com/wp-content/uploads/2017/09/NorthernLightsiStock.jpg', 1);
('https://www.projectinspo.com/wp-content/uploads/2016/02/alaska-northern-lights-2000-copy-copy-770x390.jpg', 1);
('https://touristjourney.com/wp-content/uploads/2020/07/How-to-See-the-Northern-Lights-in-Iceland-scaled.jpg', 1);
('https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 2);
('https://images.unsplash.com/photo-1579033461380-adb47c3eb938?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 2);
('https://images.unsplash.com/photo-1483347756197-71ef80e95f73?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60', 2);
('https://images.unsplash.com/photo-1529963183134-61a90db47eaf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 3);
('https://images.unsplash.com/photo-1568607689150-17e625c1586e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 3);
('https://images.unsplash.com/photo-1504858700536-882c978a3464?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5vcnRoZXJuJTIwbGlnaHRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 3);
('https://images.unsplash.com/photo-1430132594682-16e1185b17c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fG5vcnRoZXJuJTIwbGlnaHRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 4);
('https://images.unsplash.com/photo-1472419551702-dc4862cad8f9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5vcnRoZXJuJTIwbGlnaHRzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60', 4);
('https://pbs.twimg.com/media/B8Q4YScCEAEL1cL.jpg', 4);
('https://twistedsifter.com/wp-content/uploads/2017/05/33-best-auroras-nasa-has-ever-featured-3.jpg', 5);
('https://adventures.com/media/6169/how-to-take-pictures-of-the-northern-lights-camera-tripod-4.jpg', 5);
('https://lp-cms-production.imgix.net/news/2017/12/northern-lights.jpg', 5);

INSERT INTO locations (location_name, coordinates, aurora_id, location_rating)
('Banff', '51.1784° N, 115.5708° W', 1, 4);
('Moberly Lake', '55.8233° N, 121.7889° W', 1, 5);
('Northern Lights Centre','60.2343° N, 128.3215° W', 2, 4);
('High Level','58.5071° N, 117.1403° W', 4, 4);

INSERT INTO meetups (location_id)
(1);
(3);
(2);
(4);

INSERT INTO meetup_photographers (meetup_id, photographer_id)
VALUES
(1, 1);
(1, 5);
(2, 2);
(2, 4);
(3, 5);
(3, 3);
(4, 1);
(4, 2);

INSERT INTO equipment (photographer_id, camera_body, lens1, lens2)
VALUES
(1, 'Canon T3i', 'Canon 14mm', 'Canon 35mm');
(2, 'Canon Mark III', 'Canon 24-105mm', 'Canon 50mm');
(3, 'Panasonic G7', 'Lumix 20mm', 'Lumix 14-150mm');
(4, 'Nikon Z6', 'Nikon 35mm', 'Nikon 18-140mm');
(5, 'Sony Alpha 33', 'Tamron 28-200mm', 'Sony 18-35mm');

INSERT INTO location_ratings (location_id, number_stars) 
VALUES
(1, 4);
(2, 5);
(3, 3);
(1, 5);
(2, 5);
(3, 4);

INSERT INTO auroras (forecast, location, strength) 
VALUES
('Clear', 'Banff National Park', 3);
('Cloudy', 'Moberly Lake Park', 2);
('Sunny', 'Yukon', 5);
('Clear', 'High Level', 4)
