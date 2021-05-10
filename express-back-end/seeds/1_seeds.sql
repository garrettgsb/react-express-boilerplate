-- USERS TABLE SEEDS
INSERT INTO users (name, password, email)
 VALUES ('Michael Scott', 'password', 'michaelscarn@dundermifflin.com');


-- POSTS TABLE SEEDS
INSERT INTO posts (body, time_stamp, isDeleted, user_id)
 VALUES ('test post', 050721, false, 1);


-- ANXIETY RESOURCE SEEDS
INSERT INTO resources (title, category, link, content, favourited)
 VALUES ('Stop An Anxiety Attack', 'Anxiety', 'https://v1.nitrocdn.com/rdVdpjsyHfwtqaZfkMplDiZritrnIecd/assets/static/optimized/rev-9ad92c3/wp-content/uploads/2019/09/stop-anxiety-attack.jpg', 'InfoGraphic - How to stop an anxiety attack.', false), ('What An Anxiety Attack Looks Like', 'Anxiety', 'https://v1.nitrocdn.com/rdVdpjsyHfwtqaZfkMplDiZritrnIecd/assets/static/source/rev-9ad92c3/wp-content/uploads/2019/01/anxiety-infographics-450x800.jpg', 'InfoGraphic - Identifying an anxiety attack', false), ('Calm Your Mind!', 'Anxiety', 'https://www.youtube.com/watch?v=-YUSGm5GJYA&ab_channel=JayShetty', 'Video - Quick watch for when you are spiralling', false), ('Overcome Anxiety In 7 Minutes', 'Anxiety', 'https://www.ted.com/talks/mel_schwartz_overcome_anxiety_in_7_minutes?language=en', 'TedTalk - Tips for dealing with and overcoming anxiety', false), ('How To Cope With Anxiety', 'Anxiety', 'https://www.youtube.com/watch?v=WWloIAQpMcQ&ab_channel=TEDxTalks', 'TedTalk - Learning to cope with anxiety', false), ('Tips For Managing Anxiety', 'Anxiety', 'https://adaa.org/tips', 'Reading - Tips for dealing with and overcoming anxiety', false), ('Meditation For Anxiety', 'Anxiety', 'https://www.youtube.com/watch?v=4pLUleLdwY4&t=8s&ab_channel=YogaWithAdriene', 'Meditation/Video - Guided meditation for anxiety', false), ('Yoga For Anxiety', 'Anxiety', 'https://www.youtube.com/watch?v=bJJWArRfKa0&ab_channel=YogaWithAdriene', 'Yoga - Guided yoga practice for anxiety', false);