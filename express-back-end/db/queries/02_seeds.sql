INSERT INTO users (name, email, password, bio, age, gender_id, location, height_in_cm, education,
 occupation, drink_id, exercise_id, dating_goal_id, is_active)
VALUES
  ('Brennan Padilla','ectus.quis@icloud.com', '1111', 'lorem bio', 25, 1, 'Vancouver', 180 , 'high school', 'student', 1, 2, 1, true),
  ('Belle Hendrick','quis@hotmail.couk', '1111', 'lorem bio', 30, 0, 'Toronto', 155 , 'University', 'Barista', 1, 2, 1, true),
  ('dfasdf Hendrick','fddfsdf@hotmail.couk', '1111', 'lorem bio', 22, 0, 'Vancouver', 145 , 'high school', 'student', 1, 2, 1, true),
  ('new person','new@hotmail.couk', '1111', 'lorem bio', 50, 1, 'Vancouver', 199 , 'high school', 'Plumber', 1, 2, 1, true);


INSERT INTO user_photos (user_id, url, is_profile)
VALUES 
(1, 'https://www.pride.com/sites/default/files/styles/vertical_gallery_desktop_1x/public/chris-1_5.jpg?itok=tua7J0Jc&timestamp=1658176301', true),
(2, 'http://d17zbv0kd7tyek.cloudfront.net/wp-content/uploads/2015/06/leonardo-dicaprio-fb.jpg', true),
(2, 'https://d1jyxxz9imt9yb.cloudfront.net/person/1571/detail_image/mobile/LDC-High-Res-Headshot.jpg', false);

INSERT INTO messages (from_user_id, to_user_id, message, message_seen, date_sent) 
VALUES 
(1, 2, 'hey from id.1 to id.2', false, CURRENT_TIMESTAMP),
(2, 1, 'hey from id.2 to id.1', false, CURRENT_TIMESTAMP),
(1, 2, 'hey again from id.1 to id.2', false, CURRENT_TIMESTAMP);

INSERT INTO matchings (from_user_id, to_user_id, like_value, seen, matched_date) 
VALUES 
(1, 2, true, true, CURRENT_TIMESTAMP),
(2, 1, true, true, CURRENT_TIMESTAMP),
(3, 1, true, true, CURRENT_TIMESTAMP);


INSERT INTO genders (value) 
VALUES 
  ('Woman'), ('Man'), ('Everyone');
  
INSERT INTO drinks (value) 
VALUES 
  ('Do Not Care'), ('No'), ('Sometimes'), ('Yes');

INSERT INTO exercises (value) 
VALUES 
  ('Do Not Care'), ('No'), ('Sometimes'), ('Yes');

INSERT INTO dating_goals (value) 
VALUES 
  ('Dont Know Yet'), ('Short Term'), ('Long Term'), ('Life Partner');


  INSERT INTO preferences 
  (user_id) 
VALUES 
(1),
(2),
(3),
(4);