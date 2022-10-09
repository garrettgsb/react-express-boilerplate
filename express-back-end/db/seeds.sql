-- users
INSERT INTO users (name, email, password, phone, gender, age, planner, runner)
VALUES ('Jane Doe','jane@jane.com','$2a$10$r9wYh1lcViQBfeIF13wUs.JSD7jdk.l0XLlBdySc.3FW/Z8dM2Z2e','111-111-1111','F',21,TRUE,TRUE),
('John Doe','john@john.com','$2a$10$r9wYh1lcViQBfeIF13wUs.JSD7jdk.l0XLlBdySc.3FW/Z8dM2Z2e','222-222-2222','M',22,FALSE,TRUE),
('Bob Roberts','bob@bob.com','$2a$10$r9wYh1lcViQBfeIF13wUs.JSD7jdk.l0XLlBdySc.3FW/Z8dM2Z2e','333-333-3333','M',23,TRUE,FALSE),
('Lilly Smith','lilly@lilly.com','$2a$10$r9wYh1lcViQBfeIF13wUs.JSD7jdk.l0XLlBdySc.3FW/Z8dM2Z2e','444-444-4444','F',24,FALSE,TRUE);

-- runs
INSERT INTO runs (name, description, location, distance, time, date, planner_id, latitude, longitude, location_to, latitude_to, longitude_to)
VALUES ('Aberfoyle Park','Great running space full of trees. You need the dark in order to show the light. These things happen automatically. All you have to do is just let them happen. You gotta think like a tree.','212, Aberfoyle St., Aberfoyle, ON, L8T 8T5',2,'10:00:00','2022-05-23', 1, 43.952347, -79.431323, '212, Aberfoyle St., Aberfoyle, ON, L8T 8T5', 43.972347, -79.531323),
('Seaside Park','Beautiful view of the sea. We will lay all these little funky little things in there. Pretend you are water. Just floating without any effort. Having a good day. All kinds of happy little splashes.','213, Seaside St., Seaside, BC, K8L 8Y5',10,'10:00:00','2022-12-23', 1, 49.312464, -123.143101, '213, Seaside St., Seaside, BC, K8L 8Y5', 49.254969,-123.2037175),
('Mountain Park','See mountains while you run. Maybe there is a little something happening right here. Think about a cloud. Just float around and be there. It looks so good, I might as well not stop.','412, Mountain St., Mountain, AB, O5Y 8F7',5,'09:00:00','2022-08-12',3, 50.979643, -114.098084, '412, Mountain St., Mountain, AB, O5Y 8F7', 50.979643, -114.098084),
('Hidden Park','Quaint area far from the city hustle and bustle. Let your heart be your guide. Everything is not great in life, but we can still find beauty in it.','432, Hidden St., Hidden, QC, W4R 5T8',5,'08:00:00','2022-11-10',3, 45.499262,-73.570682,  '432, Hidden St., Hidden, QC, W4R 5T8', 45.5118111,-73.695578),
('New Park','New surroundings. The light is your friend. Preserve it. Every single thing in the world has its own personality - and it is up to you to make friends with the little rascals.','432, New St., New, QC, W4R 5T8',10,'08:00:00','2022-8-10',3, 45.501836, -73.593265, '432, New St., New, QC, W4R 5T8', 45.501836, -73.593265 ),
('Gargoyle Park','Great running space full of trees. I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. Just let these leaves jump.','212, Gargoyle St., Gargoyle, ON, L8T 8T5',5,'10:00:00','2023-11-23',1, 43.696061, -79.354618, '212, Gargoyle St., Gargoyle, ON, L8T 8T5', 43.6465479,-79.603766),
('Bench Park','Beautiful view of the sea. Have fun with it. Everyone is going to see things differently - and that is the way it should be.','213, Bench St., Bench, BC, K8L 8Y5',5,'10:00:00','2023-12-23',1,49.313020, -124.212467, '213, Bench St., Bench, BC, K8L 8Y5', 49.1735987,-124.0967019 ),
('Kananaskis Park','See mountains while you run. Just go out and talk to a tree. Make friends with it. All you have to do is let your imagination go wild.','412, Little Lougheed, Kananaskis, AB, O5Y 8F7',5,'09:00:00','2023-08-12',3,50.953012, -115.315435, '412, Little Lougheed, Kananaskis, AB, O5Y 8F7', 50.8899495,-115.3338652 ),
('Forillon Park','Quaint area far from the city hustle and bustle. Go out on a limb - that is where the fruit is. Be brave. There is immense joy in just watching - watching all the little creatures in nature.','432, Greens St., Greens, QC, W4R 5T8',5,'08:30:00','2023-11-10',3,48.815195, -64.271882, '432, Greens St., Greens, QC, W4R 5T8', 48.7938742,-64.2611792 ),
('Sentier des Dunes','New surroundings. That is when you can experience true joy, when you have no fear. We will paint one happy little tree right here. Be so very light. Be a gentle whisper.','432, Blue St., Quebec, QC, W4R 5T8',2,'08:00:00','2023-8-10',3, 46.998819, -71.191848, '432, Blue St., Quebec, QC, W4R 5T8', 48.1593378,-69.6794241),
('Gibbons Park','Great running space full of trees. You have got to learn to fight the temptation to resist these things. Just let them happen. Work that paint. Just beat the devil out of it.','212, Smile St., London, ON, L8T 8T5',10,'10:00:00','2023-05-23',1, 42.998326, -81.259929, '212, Smile St., London, ON, L8T 8T5', 42.9649031,-81.3579601),
('Wild Side Trail','Beautiful view of the sea. We spend so much of our life looking - but never seeing. This is your world, whatever makes you happy you can put in it. Go crazy. Use absolutely.','213, Wild St., Wild, BC, K8L 8Y5',5,'10:15:00','2023-12-23',1, 49.266271, -126.055370, '213, Wild St., Wild, BC, K8L 8Y5', 49.2662579,-126.0752572),
('Old Fort Point','See mountains while you run. It is so important to do something every day that will make you happy. Maybe there is a happy little waterfall happening over here. These things happen.','412, Dog St., Jasper, AB, O5Y 8F7',2,'09:00:00','2023-08-12',3, 52.871019, -118.061465, '412, Dog St., Jasper, AB, O5Y 8F7', 52.8789656,-118.1053982),
('Promenade de la Gorge Magog','Quaint area far from the city hustle and bustle. Let us make a nice big leafy tree. Almost everything is going to happen for you automatically - you do not have to spend any time.','432, High St., Sherbrooke, QC, W4R 5T8',5,'08:00:00','2023-11-10',3, 45.401880, -71.899518, '432, High St., Sherbrooke, QC, W4R 5T8', 45.4158576,-71.9524829 ),
('Third Vault Falls','Let us make a nice big leafy tree. Almost everything is going to happen for you automatically - you do not have to spend any time working or worrying.We have a fantastic little sky!','432, 114 St., Bay of Fundy, NB, W4R 5T8',2,'08:00:00','2023-12-10',3, 45.617307, -65.024755, '432, 114 St., Bay of Fundy, NB, W4R 5T8', 45.6247906,-65.0960219);


-- users_runs
INSERT INTO users_runs (time, rating, runner_id, run_id)
VALUES (45, 4, 1, 1),
(60, 5, 2, 1),
(0, 0, 1, 2),
(0, 0, 2, 2),
(0, 0, 4, 2),
(89, 5, 1, 3),
(0, 0, 2, 4),
(0, 0, 4, 4);

