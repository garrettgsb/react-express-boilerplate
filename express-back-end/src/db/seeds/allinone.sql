INSERT INTO users(username, email, password)
  VALUES
  ('Alvin', 'alvintest@hotmail.com', 'test123'),
  ('Ricky', 'ricky2test@hotmail.com', 'test123'),
  ('Kevin', 'kevin3test@hotmail.com', 'test123');

INSERT INTO categories(name)
  VALUES
  ('eating out'),
  ('entertainment'),
  ('fuel'),
  ('groceries'),
  ('income'),
  ('insurance'),
  ('rent'),
  ('savings'),
  ('shopping'),
  ('other');

INSERT INTO expenses (user_id, created_at, amount, category_id)
  VALUES 
    (2, '2022-01-07', 12549, 4),
    (3, '2022-01-11', 58252, 8),
    (2, '2022-01-30', 8233, 8),
    (1, '2022-01-05', 48322, 8),
    (2, '2022-01-02', 46156, 5),
    (2, '2022-01-17', 90736, 9),
    (2, '2022-01-14', 76684, 2),
    (3, '2022-01-08', 24000, 2),
    (3, '2022-01-25', 59188, 6),
    (1, '2022-01-31', 56843, 4),
    (1, '2022-01-02', 29399, 1),
    (2, '2022-01-21', 25483, 5),
    (3, '2022-01-01', 2226, 6),
    (1, '2022-01-30', 80006, 1),
    (1, '2022-01-14', 25557, 6),
    (2, '2022-01-07', 81242, 5),
    (2, '2022-01-20', 14012, 9),
    (1, '2022-01-13', 69892, 9),
    (3, '2022-01-17', 14571, 10),
    (2, '2022-01-25', 48183, 6),
    (3, '2022-01-18', 64547, 4),
    (3, '2022-02-31', 16326, 1),
    (2, '2022-02-11', 82986, 4),
    (3, '2022-02-24', 62559, 3),
    (2, '2022-02-01', 52173, 8),
    (3, '2022-02-09', 59633, 8),
    (1, '2022-02-13', 65128, 8),
    (1, '2022-02-26', 48999, 1),
    (1, '2022-02-15', 42757, 1),
    (3, '2022-02-25', 98608, 10),
    (1, '2022-02-06', 39815, 2),
    (2, '2022-02-15', 55431, 5),
    (3, '2022-02-05', 68418, 9),
    (3, '2022-02-06', 94671, 7),
    (3, '2022-02-08', 31445, 10),
    (2, '2022-02-16', 1604, 6),
    (3, '2022-02-05', 53439, 9),
    (2, '2022-02-30', 68867, 6),
    (1, '2022-02-05', 34445, 4),
    (2, '2022-02-03', 54990, 4),
    (1, '2022-02-11', 49619, 3),
    (1, '2022-02-18', 70694, 3),
    (1, '2022-03-26', 65056, 9),
    (2, '2022-03-04', 43806, 4),
    (1, '2022-03-06', 48770, 5),
    (1, '2022-03-20', 74667, 6),
    (1, '2022-03-21', 79479, 2),
    (1, '2022-03-11', 32467, 8),
    (2, '2022-03-09', 89621, 8),
    (3, '2022-03-15', 36637, 8),
    (2, '2022-03-04', 15380, 10),
    (3, '2022-03-13', 7081, 6),
    (1, '2022-03-23', 88169, 6),
    (2, '2022-03-18', 53105, 6),
    (2, '2022-03-23', 69341, 1),
    (2, '2022-03-06', 9191, 6),
    (3, '2022-03-07', 81546, 1),
    (2, '2022-03-29', 21526, 1),
    (1, '2022-03-13', 94874, 1),
    (2, '2022-03-08', 82940, 8),
    (1, '2022-03-14', 4249, 7),
    (1, '2022-03-24', 76033, 4),
    (3, '2022-03-25', 92173, 6),
    (3, '2022-04-01', 31542, 10),
    (3, '2022-04-11', 40629, 6),
    (2, '2022-04-14', 53840, 6),
    (2, '2022-04-17', 78444, 10),
    (2, '2022-04-02', 90766, 4),
    (3, '2022-04-19', 12699, 3),
    (2, '2022-04-27', 2201, 6),
    (2, '2022-04-05', 16826, 10),
    (2, '2022-04-01', 48032, 10),
    (2, '2022-04-12', 74996, 7),
    (1, '2022-04-06', 80507, 8),
    (2, '2022-04-07', 29109, 8),
    (3, '2022-04-05', 70322, 8),
    (2, '2022-04-14', 54592, 5),
    (2, '2022-04-25', 56150, 1),
    (2, '2022-04-02', 47421, 9),
    (3, '2022-04-05', 29877, 6),
    (1, '2022-04-07', 7554, 1),
    (3, '2022-04-21', 68545, 9),
    (3, '2022-04-21', 16386, 10),
    (3, '2022-04-31', 68274, 5),
    (1, '2022-05-11', 13742, 1),
    (2, '2022-05-09', 65615, 8),
    (2, '2022-05-03', 31115, 1),
    (2, '2022-05-10', 16062, 9),
    (2, '2022-05-15', 28297, 4),
    (2, '2022-05-10', 92256, 6),
    (1, '2022-05-08', 73634, 1),
    (3, '2022-05-19', 73677, 8),
    (3, '2022-05-15', 82125, 7),
    (1, '2022-05-26', 23958, 9),
    (3, '2022-05-20', 55836, 8),
    (2, '2022-05-17', 63438, 8),
    (1, '2022-05-18', 34226, 8),
    (2, '2022-05-28', 70626, 1),
    (3, '2022-05-01', 71566, 8),
    (3, '2022-05-24', 79374, 2);

INSERT INTO goals (user_id, goal_name, start_date, end_date, amount)
  VALUES
  (1, 'Car: 2014 Infiniti Q50S', '2022-01-21', '2023-02-08', 3000000),
  (2, 'House', '2022-01-20', '2023-05-04', 219000000),
  (3, 'Macbook', '2022-01-13', '2023-01-21', 320000);
