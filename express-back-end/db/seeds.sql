-- users
INSERT INTO users (name, email, password, phone, gender, age, planner, runner)
VALUES ('Jane Doe','jane@jane.com','password','111-111-1111','F',21,TRUE,TRUE),
('John Doe','john@john.com','password','222-222-2222','M',22,FALSE,TRUE),
('Bob Roberts','bob@bob.com','password','333-333-3333','M',23,TRUE,FALSE),
('Lilly Smith','lilly@lilly.com','password','444-444-4444','F',24,FALSE,TRUE);

-- runs
INSERT INTO runs (name, description, location, distance, time, date, planner_id)
VALUES ('Aberfoyle Park','Great running space full of trees.','212, Aberfoyle St., Aberfoyle, ON, L8T 8T5',5,'10:00:00','2022-05-23',1),
('Seaside Park','Beautiful view of the sea.','213, Seaside St., Seaside, BC, K8L 8Y5',5,'10:00:00','2022-012-23',1),
('Mountain Park','See mountains while you run.','412, Mountain St., Mountain, AB, O5Y 8F7',5,'09:00:00','2022-08-12',3),
('Hidden Park','Quaint area far from the city hustle and bustle.','432, Hidden St., Hidden, QC, W4R 5T8',5,'08:00:00','2022-11-10',3);


-- users_runs
INSERT INTO users_runs (time, rating, runner_id, run_id)
VALUES ('00:45:00', 4, 1, 1),
('00:60:00', 5, 2, 1),
('00:35:00', 3, 1, 2),
('00:55:00', 3, 2, 2),
('00:67:00', 4, 4, 2),
('00:89:00', 5, 1, 3),
('00:45:00', 4, 2, 4),
('00:39:00', 3, 4, 4);

