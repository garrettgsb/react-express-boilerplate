INSERT INTO users (
  first_name, last_name, email, password
) VALUES ('Sherry', 'Nguyen', 'test@test.com', '123'
), (
  'Michelle', 'Siregar', 'test1@test.com', 'password'
), (
  'Stella', 'Zhou', 'test2@test.com', '456'
);

INSERT INTO attractions (
  name, review, latitude, longitude
) VALUES (
  'Stanley Park', 3.4, 49.302488447038236, -123.14171791076662
), (
  'Coal Harbour', 4, 49.291304, -123.123276
), (
  'Cypress', 4.3, 49.352945607771844, -123.17801846257264
), (
  'Third Beach', 3.5, 49.30338193650776, -123.1563403102008
), (
  'False Creek Seawll', 4.0, 49.27273179887483, -123.13379848089629
), (
  'Earnest Ice Cream', 3.7, 49.26896525441082, -123.10261255924644
), (
  'David Lam Park', 4.2, 49.2724665529135, -123.12386556302295
);

INSERT INTO itineraries (
  city, city_img, start_time, end_time
) VALUES (
  'Vancouver', 'https://vancouver.ca/images/cov/feature/about-vancouver-landing-size.jpg', '2019-12-27 09:00:00', '2019-12-27 21:00:00'
), (
  'Seattle', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Seattle_Kerry_Park_Skyline.jpg/1200px-Seattle_Kerry_Park_Skyline.jpg', '2019-12-27 09:00:00', '2019-12-27 21:00:00'
);

INSERT INTO timeslots (
  start_time, end_time, itinerary_id, attraction_id, travel_mode
) VALUES (
  '2019-12-27 09:00:00', '2019-12-27 10:00:00', 1, 1, NULL
), (
  '2019-12-27 10:00:00', '2019-12-27 10:31:00', 1, NULL, 'WALK'
), (
  '2019-12-27 10:31:00', '2019-12-27 11:30:00', 1, 2, NULL
), (
  '2019-12-27 11:30:00', '2019-12-27 13:05:00', 1, NULL, 'BUS'
), (
  '2019-12-27 13:05:00', '2019-12-27 15:00:00', 1, 3, NULL
), (
  '2019-12-28 09:00:00', '2019-12-28 10:00:00', 1, 4, NULL
), (
  '2019-12-28 10:00:00', '2019-12-28 10:45:00', 1, 4, 'BUS'
),(
  '2019-12-28 10:45:00', '2019-12-28 11:45:00', 1, 5, NULL
), (
  '2019-12-28 11:45:00', '2019-12-28 12:31:00', 1, NULL, 'BUS'
), (
  '2019-12-28 12:31:00', '2019-12-28 13:25:00', 1, 6, NULL
), (
  '2019-12-28 13:25:00', '2019-12-28 14:31:00', 1, NULL, 'BUS'
), (
  '2019-12-28 14:31:00', '2019-12-28 15:31:00', 1, 7, NULL
);

INSERT INTO user_itinerary (
  user_id, itinerary_id
) VALUES (
  1, 1
), (
  2, 1
);

