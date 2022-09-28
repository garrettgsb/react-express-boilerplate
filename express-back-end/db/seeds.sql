-- users
INSERT INTO users (name, email, password, phone, gender, age, planner, runner)
VALUES ('Jane Doe','jane@jane.com','$2a$10$r9wYh1lcViQBfeIF13wUs.JSD7jdk.l0XLlBdySc.3FW/Z8dM2Z2e','111-111-1111','F',21,TRUE,TRUE),
('John Doe','john@john.com','$2a$10$r9wYh1lcViQBfeIF13wUs.JSD7jdk.l0XLlBdySc.3FW/Z8dM2Z2e','222-222-2222','M',22,FALSE,TRUE),
('Bob Roberts','bob@bob.com','$2a$10$r9wYh1lcViQBfeIF13wUs.JSD7jdk.l0XLlBdySc.3FW/Z8dM2Z2e','333-333-3333','M',23,TRUE,FALSE),
('Lilly Smith','lilly@lilly.com','$2a$10$r9wYh1lcViQBfeIF13wUs.JSD7jdk.l0XLlBdySc.3FW/Z8dM2Z2e','444-444-4444','F',24,FALSE,TRUE);

-- runs
INSERT INTO runs (name, description, location, distance, time, date, planner_id, latitude, longitude)
VALUES ('Aberfoyle Park','Great running space full of trees.','212, Aberfoyle St., Aberfoyle, ON, L8T 8T5',5,'10:00:00','2022-05-23', 1, 43.952347, -79.431323),
('Seaside Park','Beautiful view of the sea.','213, Seaside St., Seaside, BC, K8L 8Y5',5,'10:00:00','2022-12-23', 1, 49.312464, -123.143101),
('Mountain Park','See mountains while you run.','412, Mountain St., Mountain, AB, O5Y 8F7',5,'09:00:00','2022-08-12',3, 50.979643, -114.098084),
('Hidden Park','Quaint area far from the city hustle and bustle.','432, Hidden St., Hidden, QC, W4R 5T8',5,'08:00:00','2022-11-10',3, 45.499262,-73.570682),
('New Park','New surroundings','432, New St., New, QC, W4R 5T8',5,'08:00:00','2022-8-10',3, 45.501836, -73.593265 ),
('Gargoyle Park','Great running space full of trees.','212, Gargoyle St., Gargoyle, ON, L8T 8T5',5,'10:00:00','2023-11-23',1, 43.696061, -79.354618),
('Bench Park','Beautiful view of the sea.','213, Bench St., Bench, BC, K8L 8Y5',5,'10:00:00','2023-12-23',1,49.313020, -124.212467 ),
('Kananaskis Park','See mountains while you run.','412, Little Lougheed, Kananaskis, AB, O5Y 8F7',5,'09:00:00','2023-08-12',3,50.953012, -115.315435 ),
('Forillon Park','Quaint area far from the city hustle and bustle.','432, Greens St., Greens, QC, W4R 5T8',5,'08:00:00','2023-11-10',3,48.815195, -64.271882 ),
('Sentier des Dunes','New surroundings','432, Blue St., Quebec, QC, W4R 5T8',5,'08:00:00','2023-8-10',3, 46.998819, -71.191848),
('Gibbons Park','Great running space full of trees.','212, Smile St., London, ON, L8T 8T5',5,'10:00:00','2023-05-23',1, 42.998326, -81.259929),
('Wild Side Trail','Beautiful view of the sea.','213, Wild St., Wild, BC, K8L 8Y5',5,'10:00:00','2023-12-23',1, 49.266271, -126.055370),
('Old Fort Point','See mountains while you run.','412, Dog St., Jasper, AB, O5Y 8F7',5,'09:00:00','2023-08-12',3, 52.871019, -118.061465),
('Promenade de la Gorge Magog','Quaint area far from the city hustle and bustle.','432, High St., Sherbrooke, QC, W4R 5T8',5,'08:00:00','2023-11-10',3, 45.401880, -71.899518 ),
('Third Vault Falls','New surroundings','432, 114 St., Bay of Fundy, NB, W4R 5T8',5,'08:00:00','2023-12-10',3, 45.617307, -65.024755);


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

