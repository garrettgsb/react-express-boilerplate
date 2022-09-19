-- READ users
-- Get all users
SELECT * FROM users;

-- Get user by email
SELECT * FROM users
WHERE users.email = 'jane@jane.com';

-- Get all runners
SELECT * FROM users 
WHERE users.runner = TRUE;

-- Get all planners
SELECT * FROM users 
WHERE users.planner = TRUE;

-- Create a new user
INSERT INTO users (name, email, password, phone, gender, age, planner, runner)
VALUES ('Jane Doe','jane@jane.com','password','111-111-1111','F',21,TRUE,TRUE);

-- READ runs
-- Get all runs - past and future
SELECT runs.name, runs.description, runs.location, runs.time, runs.date 
FROM runs;  

-- Get all runs - past
SELECT runs.name, runs.description, runs.location, runs.time, runs.date 
FROM runs
WHERE runs.date < CURRENT_DATE; 

-- Get all runs - future
SELECT runs.id, runs.name, runs.description, runs.location, runs.time, runs.date 
FROM runs
WHERE runs.date >= CURRENT_DATE; 

-- Get specific run based on id
SELECT runs.id, runs.name, runs.description, runs.location, runs.time, runs.date 
FROM runs
WHERE runs.id = 1; 

-- Get all runs for a specific planner
SELECT users.id AS user_id, runs.name, runs.description, runs.location,
      (CASE WHEN runs.date >= CURRENT_DATE THEN TRUE
            ELSE FALSE
       END) AS future_runs
FROM runs
JOIN users ON runs.planner_id = users.id
WHERE runs.planner_id = 1;

-- Get all runs for a specific runner
SELECT users.id AS user_id, runs.name, runs.description, runs.distance, runs.date, users_runs.time, users_runs.rating, 
      (CASE WHEN runs.date >= CURRENT_DATE THEN TRUE
            ELSE FALSE
       END) AS future_runs
FROM runs
JOIN users_runs ON runs.id = users_runs.run_id
JOIN users ON users_runs.runner_id = users.id
WHERE users_runs.runner_id = 3;
