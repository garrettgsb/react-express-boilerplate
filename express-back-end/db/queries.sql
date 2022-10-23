-- users
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



-- runs
-- Get all runs - past and future
SELECT runs.id, runs.name, runs.description, runs.location, runs.time, runs.date, runs.planner_id 
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
SELECT runs.id, users.id AS planner_id, runs.name, runs.description, runs.distance, runs.date,
      (CASE WHEN runs.date >= CURRENT_DATE THEN TRUE
            ELSE FALSE
       END) AS future_run
FROM runs
JOIN users ON runs.planner_id = users.id
WHERE runs.planner_id = 1;

-- Get all runs for a specific user - planned or participated in NOT FINISHED SO FAR
-- SELECT users.id AS user_id, runs.id AS run_id, runs.name, runs.description, runs.distance, runs.date, users_runs.time, users_runs.rating, 
--       (CASE WHEN runs.date >= CURRENT_DATE THEN TRUE
--             ELSE FALSE
--        END) AS future_run,
--       (CASE WHEN (users.planner = TRUE AND users.runner = TRUE AND users.id = runs.planner_id AND users_runs.runner_id = users.id) THEN 'B'
--             WHEN (users.planner = TRUE AND users.runner = FALSE AND users.id = runs.planner_id) THEN 'P'
--             WHEN (users.planner = TRUE AND users.runner = TRUE AND users_runs.runner_id = users.id) THEN 'R'
--             WHEN (users.planner = FALSE AND users.runner = TRUE AND users_runs.runner_id = users.id) THEN 'R'
--             ELSE 'NA'
--        END) AS planned_run_both
-- FROM users
-- FULL OUTER JOIN runs ON users.id = runs.planner_id
-- FULL OUTER JOIN users_runs ON users.id = users_runs.runner_id
-- GROUP BY users.id, runs.id, users_runs.id
-- ORDER BY users.id;

-- Create a run
INSERT INTO runs (name, description, location, distance, time, date, planner_id)
VALUES ('Aberfoyle Park','Great running space full of trees.','212, Aberfoyle St., Aberfoyle, ON, L8T 8T5',5,'10:00:00','2022-05-23',1);



-- users_runs
-- Get all runs for a specific runner
SELECT runs.id, users.id AS user_id, runs.name, runs.description, runs.distance, runs.date, users_runs.time, users_runs.rating, 
      (CASE WHEN runs.date >= CURRENT_DATE THEN TRUE
            ELSE FALSE
       END) AS future_run
FROM users_runs
JOIN runs ON runs.id = users_runs.run_id
JOIN users ON users_runs.runner_id = users.id
WHERE users_runs.runner_id = 1;

-- Join a run - only future runs
INSERT INTO users_runs (time, rating, runner_id, run_id)
      SELECT 0, 0, 1, 4
      WHERE
      EXISTS (
            -- only future runs can be joined
        SELECT *
        FROM runs
        WHERE runs.id = 4 AND runs.date >= CURRENT_DATE
        LIMIT 1
      ) AND 
      NOT EXISTS (
            -- runs can only be joined once
        SELECT *
        FROM users_runs
        WHERE users_runs.run_id = 4 AND users_runs.runner_id = 1
        LIMIT 1    
      )
      RETURNING *;

