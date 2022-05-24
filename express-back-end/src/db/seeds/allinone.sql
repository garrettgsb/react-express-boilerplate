INSERT INTO users(username, email, password)
  VALUES
  ('Alvin', 'alvin@hotmail.com', '$2a$10$JE583jGFxPoQTuMabzQQ0O2zOw.DehvjX/9AXkmWTH3rw80pfhNda'),
  ('Ricky', 'ricky@hotmail.com', '$2a$10$JE583jGFxPoQTuMabzQQ0O2zOw.DehvjX/9AXkmWTH3rw80pfhNda'),
  ('Kevin', 'kevin@hotmail.com', '$2a$10$JE583jGFxPoQTuMabzQQ0O2zOw.DehvjX/9AXkmWTH3rw80pfhNda');

INSERT INTO categories(name)
  VALUES
  ('Eating Out'),
  ('Entertainment'),
  ('Fuel'),
  ('Groceries'),
  ('Income'),
  ('Insurance'),
  ('Rent'),
  ('Savings'),
  ('Shopping'),
  ('Other');

INSERT INTO expenses (user_id, created_at, amount, category_id)
  VALUES 
    (3, '2022-01-01', 2226, 6),
    (1, '2022-01-02', 2099, 1),
    (2, '2022-01-02', 46156, 5),
    (1, '2022-01-05', 4022, 8),
    (1, '2022-01-06', 18007, 8),
    (2, '2022-01-07', 81242, 5),
    (2, '2022-01-07', 12549, 4),
    (3, '2022-01-08', 24000, 2),
    (3, '2022-01-11', 58252, 8),
    (1, '2022-01-13', 6092, 9),
    (2, '2022-01-14', 76684, 2),
    (1, '2022-01-14', 20570, 6),
    (2, '2022-01-15', 58233, 8),
    (3, '2022-01-17', 14571, 10),
    (3, '2022-01-18', 64547, 4),
    (2, '2022-01-17', 90736, 9),
    (2, '2022-01-20', 14012, 9),
    (2, '2022-01-21', 25483, 5),
    (3, '2022-01-25', 59188, 6),
    (2, '2022-01-25', 48183, 6),
    (1, '2022-01-30', 8006, 1),
    (1, '2022-01-31', 50430, 4),
    (2, '2022-02-01', 52173, 8),
    (2, '2022-02-03', 54990, 4),
    (1, '2022-02-05', 3045, 4),
    (3, '2022-02-05', 68418, 9),
    (3, '2022-02-05', 53439, 9),
    (3, '2022-02-06', 94671, 7),
    (1, '2022-02-06', 3015, 2),
    (1, '2022-02-06', 28007, 8),
    (3, '2022-02-08', 31445, 10),
    (3, '2022-02-09', 59633, 8),
    (2, '2022-02-11', 82986, 4),
    (1, '2022-02-11', 4019, 3),
    (1, '2022-02-13', 66028, 8),
    (1, '2022-02-15', 4057, 1),
    (2, '2022-02-15', 55431, 5),
    (2, '2022-02-16', 1604, 6),
    (2, '2022-02-17', 82940, 8),
    (1, '2022-02-18', 7094, 3),
    (3, '2022-02-24', 62559, 3),
    (3, '2022-02-25', 98608, 10),
    (1, '2022-02-26', 4099, 1),
    (2, '2022-02-30', 68867, 6),
    (3, '2022-02-31', 16326, 1),
    (2, '2022-03-04', 43806, 4),
    (2, '2022-03-04', 15380, 10),
    (1, '2022-03-06', 40700, 5),
    (2, '2022-03-06', 9191, 6),
    (1, '2022-03-06', 7007, 8),
    (3, '2022-03-07', 81546, 1),
    (2, '2022-03-09', 89621, 8),
    (1, '2022-03-11', 13067, 8),
    (1, '2022-03-13', 9074, 1),
    (3, '2022-03-13', 7081, 6),
    (1, '2022-03-14', 409, 7),
    (3, '2022-03-01', 36637, 8),
    (2, '2022-03-18', 53105, 6),
    (1, '2022-03-20', 50070, 8),
    (1, '2022-03-20', 7067, 6),
    (1, '2022-03-21', 7079, 2),
    (1, '2022-03-23', 8069, 6),
    (2, '2022-03-23', 69341, 1),
    (1, '2022-03-24', 7033, 4),
    (3, '2022-03-25', 92173, 6),
    (1, '2022-03-26', 6056, 9),
    (1, '2022-03-26', 80000, 8),
    (2, '2022-03-29', 21526, 1),
    (2, '2022-03-31', 169109, 8),
    (2, '2022-04-01', 48032, 10),
    (3, '2022-04-01', 31542, 10),
    (2, '2022-04-02', 47421, 9),
    (2, '2022-04-02', 90766, 4),
    (3, '2022-04-05', 29877, 6),
    (3, '2022-04-05', 70322, 8),
    (2, '2022-04-05', 16826, 10),
    (1, '2022-04-06', 69000, 8),
    (1, '2022-04-07', 7004, 1),
    (3, '2022-04-11', 40629, 6),
    (2, '2022-04-12', 74996, 7),
    (2, '2022-04-14', 54592, 5),
    (2, '2022-04-14', 53840, 6),
    (1, '2022-04-15', 11050, 8),
    (2, '2022-04-17', 78444, 10),
    (2, '2022-04-17', 65615, 8),
    (3, '2022-04-19', 12699, 3),
    (3, '2022-04-21', 16386, 10),
    (3, '2022-04-21', 68545, 9),
    (2, '2022-04-25', 56150, 1),
    (2, '2022-04-27', 2201, 6),
    (3, '2022-04-31', 68274, 5),
    (3, '2022-05-01', 71566, 8),
    (2, '2022-05-03', 31115, 1),
    (1, '2022-05-06', 41050, 8),
    (2, '2022-05-10', 16062, 9),
    (2, '2022-05-10', 92256, 6),
    (2, '2022-05-15', 28297, 4),
    (3, '2022-05-15', 82125, 7),
    (2, '2022-05-17', 63438, 8),
    (1, '2022-05-18', 33000, 8),
    (3, '2022-05-21', 79374, 2),
    (2, '2022-05-24', 70626, 1),
    (1, '2022-05-22', 14000, 8),
    (1, '2022-05-23', 11000, 1),
    (1, '2022-05-24', 180000, 2),
    (1, '2022-05-25', 2000, 9),
    (1, '2022-05-26', 8000, 1);

INSERT INTO goals (user_id, goal_name, start_date, end_date, amount)
  VALUES
  (1, 'Car: 2014 Infiniti Q50S', '2022-01-02', '2022-06-01', 500000),
  (2, 'House', '2022-01-02', '2023-05-04', 2190000),
  (3, 'Macbook', '2022-01-08', '2022-06-01', 320000);