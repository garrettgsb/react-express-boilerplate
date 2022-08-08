INSERT INTO users (first_name, last_name, email, password, image_url)
VALUES ('Bryan', 'Anichini', 'nunogse@vuncid.sz', 'nl3dn4^$', 'profile.jpg'),
('Bernard', 'Bates', 'lamtomrob@ograf.ms', 'PEfU$1SB', 'profile.jpg'),
('Hettie', 'Lucchesi', 'wu@ivepuh.de', 'dkGsHChz', 'profile.jpg'),
('Jay', 'Dixon', 'ebako@mafta.ax', 'pncNk%yq', 'profile.jpg'),
('Sadie', 'Clements', 'vil@irdauf.sk', 'KvkcaP9I', 'profile.jpg'),
('Barry', 'Woods', 'mugeho@mapfu.aq', '7#dOAJK', 'profile.jpg'),
('Luke', 'Menendez', 'bidheca@hitam.co', '1pdGd', 'profile.jpg'),
('Maude', 'Gargani', 'budi@akoima.bi', '!nT$Vuuz', 'profile.jpg'),
('Lucille', 'Alinari', 'japrowsum@ramuwu.cx', '9n8tkDl', 'profile.jpg'),
('Lucinda', 'Love', 'padih@jo.gw', '&WAQSQnb', 'profile.jpg'),
('Rosa', 'Voigt', 'uwoevre@ru.za', 'K@qy2B0%', 'profile.jpg'),
('Alejandro', 'Bausi', 'pirkifrik@oze.bo', 'hYCtY2&', 'profile.jpg'),
('Pauline', 'Matsui', 'oda@joffatni.mo', 'O@9um1', 'profile.jpg'),
('Catherine', 'van Ommen', 'age@azoda.md', 'zTttKi4m', 'profile.jpg'),
('Edgar', 'Okamoto', 'jed@buzoglew.ng', 'R9Yt!h1', 'profile.jpg'),
('Sadie', 'Wade', 'balij@ped.li', 'dXpvC&b', 'profile.jpg'),
('Lillie', 'Pecchioli', 'zaphiitu@ubfaw.sl', 'D0^7#AF', 'profile.jpg'),
('Daisy', 'Xu', 'rav@soh.ye', 'ZRA0eN%', 'profile.jpg'),
('Miguel', 'van der Wal', 'jifezwag@job.ie', '1tTFb6CU', 'profile.jpg'),
('Cecelia', 'Stefanini', 'ah@of.bo', 'J3ohy9Vp', 'profile.jpg'),
('Melvin', 'Manuelli', 'je@puveg.ci', 'BW7ZfgAL', 'profile.jpg'),
('Sylvia', 'Vogt', 'jemaf@conad.sc', 'GqNdXJXf', 'profile.jpg'),
('Pearl', 'Ulivi', 'keluzcat@dic.gb', '3fHd1ppY', 'profile.jpg'),
('Ricardo', 'Fratini', 'vo@re.tc', 'l^DIPhc2', 'profile.jpg');


INSERT INTO bookclubs (user_id, name, description, private, image_url, current_book)
VALUES ('1', 'The Horror Club', 'We discuss horrors!', false, 'club.jpg', 123),
('2', 'The Fantasy Club', 'We discuss fantasys!', true, 'club.jpg', null),
('3', 'The Non-Fiction Club', 'We discuss non-fictions!', false, 'club.jpg', null),
('4', 'The Car Club', 'We discuss cars!', true, 'club.jpg', null),
('5', 'The Sci-Fi Club', 'We discuss sci-fis!', false, 'club.jpg', null),
('6', 'The War Club', 'We discuss wars!', false, 'club.jpg', null),
('7', 'The Shakespeare Club', 'We discuss shakespeares!', false, 'club.jpg', null),
('8', 'The Author Club', 'We discuss authors!', true, 'club.jpg', null),
('9', 'The Penguins Club', 'We discuss penguinss!', false, 'club.jpg', null),
('10', 'The Harry Potter Club', 'We discuss harry potters!', false, 'club.jpg', null);

INSERT INTO finished_books (club_id, isbn)
VALUES (1, null),
(2, 8980),
(3, 45455);

INSERT INTO members (club_id, user_id)
VALUES (1, 1),
(1,2),
(1,3),
(2,4),
(2,5),
(2,6),
(3,7),
(3,8),
(3,9);


INSERT INTO meetings (club_id, date, time, virtual_link, notes, complete)
VALUES(1, '2022-08-25', '04:59.999999', 'google.met.com', null, false),
(1, '2019-08-25', '04:59.999999', 'google.met.com', null, true);

INSERT INTO current_reads(user_id, isbn, api)
VALUES(1, 123, 'google'),
(1, 456, 'google');

INSERT INTO want_to_reads (user_id, isbn, api)
VALUES(1, 789, 'google'),
(1, 1011, 'google');

INSERT INTO have_reads (user_id, isbn, api)
VALUES(1, 1213, 'google'),
(1, 1415, 'google');