INSERT INTO users (name, email, password, bio, age, gender_id, location, height_in_cm, education,
 occupation, drink_id, exercise_id, dating_goal_id, is_active)
VALUES
  ('Brennan Padilla','ectus.quis@icloud.com', '1111', 'I have never seen a straight banana.', 25, 1, 'Vancouver', 180 , 'high school', 'student', 3, 3, 2, true),
  ('Belle Hendrick','quis@hotmail.couk', '1111', 'lorem bio', 30, 0, 'Toronto', 155 , 'University', 'Barista', 1, 2, 1, true),
  ('dfasdf Hendrick','fddfsdf@hotmail.couk', '1111', 'lorem bio', 22, 1, 'Vancouver', 145 , 'high school', 'student', 1, 2, 1, true),
  ('new person','new@hotmail.couk', '1111', 'lorem bio', 50, 1, 'Vancouver', 199 , 'high school', 'Plumber', 1, 2, 1, true),
  ('New User 5','fddfsdf@hotmail.couk', '1111', 'lorem bio', 22, 1, 'Vancouver', 145 , 'high school', 'student', 1, 2, 1, true);


INSERT INTO user_photos (user_id, url, is_profile)
VALUES 
(1, 'https://images.genius.com/51f5c16c628a0d96dd7285f7fdf26348.1000x1000x1.jpg', true),
(1, 'https://pbs.twimg.com/media/ENLQQLJVUAATN8a.jpg', false),
(2, 'http://d17zbv0kd7tyek.cloudfront.net/wp-content/uploads/2015/06/leonardo-dicaprio-fb.jpg', true),
(2, 'https://d1jyxxz9imt9yb.cloudfront.net/person/1571/detail_image/mobile/LDC-High-Res-Headshot.jpg', false),
(3, 'https://www.xtrafondos.com/wallpapers/vertical/ana-de-armas-en-photoshoot-5501.jpg', true),
(3, 'https://www.xtrafondos.com/wallpapers/vertical/ana-de-armas-2020-6113.jpg', false),
(3, 'https://images.hola.com/us/images/025b-0ee0dbb57971-3e4d042ce881-1000/vertical-800/ana-de-armas-luciendo-sus-looks-de-cabello-oscuro.jpg', false),
(4, 'https://www.xtrafondos.com/wallpapers/vertical/ana-de-armas-en-photoshoot-5501.jpg', false),
(4, 'https://www.xtrafondos.com/wallpapers/vertical/ana-de-armas-2020-6113.jpg', true),
(4, 'https://images.hola.com/us/images/025b-0ee0dbb57971-3e4d042ce881-1000/vertical-800/ana-de-armas-luciendo-sus-looks-de-cabello-oscuro.jpg', false),
(5, 'https://media.vogue.co.uk/photos/5e81ba5e138bdd00089677d9/2:3/w_2560%2Cc_limit/shutterstock_editorial_10576430d.jpg', true),
(5, 'https://media.glamour.com/photos/617ed8cd81d28bb722b6812b/master/pass/1194078278', false);


INSERT INTO messages (from_user_id, to_user_id, message, message_seen, date_sent) 
VALUES 
(1, 2, 'hey from id.1 to id.2', false, CURRENT_TIMESTAMP),
(2, 1, 'hey from id.2 to id.1', false, CURRENT_TIMESTAMP),
(1, 2, 'hey again from id.1 to id.2', false, CURRENT_TIMESTAMP);

INSERT INTO matchings (from_user_id, to_user_id, like_value, seen, matched_date) 
VALUES 
(1, 2, true, true, CURRENT_TIMESTAMP),
(2, 1, true, true, CURRENT_TIMESTAMP),
(3, 1, false, true, CURRENT_TIMESTAMP),
(4, 1, true, true, CURRENT_TIMESTAMP),
(5, 1, true, true, CURRENT_TIMESTAMP);

INSERT INTO genders (value) 
VALUES 
  ('Woman'), ('Man'), ('Everyone');
  
INSERT INTO drinks (value) 
VALUES 
  ('Never'), ('Sometimes'), ('Socially'), ('Yes');

INSERT INTO exercises (value) 
VALUES 
  ('Never'), ('Sometimes'), ('Often'), ('Everyday');

INSERT INTO dating_goals (value) 
VALUES 
  ('Not sure yet'), ('Short-term / Casual'), ('Long-term'), ('Life partner');


  INSERT INTO preferences 
  (user_id, gender_id, drink_id, exercise_id, dating_goal_id) 
VALUES 
(1, 1, 1, 1, 1),
(2,2,2,2,2),
(3,3,3,3,3),
(4,1,1,1,1);