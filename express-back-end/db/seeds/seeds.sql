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
  'False Creek Seawall', 4.0, 49.27273179887483, -123.13379848089629
), (
  'Earnest Ice Cream', 3.7, 49.26896525441082, -123.10261255924644
), (
  'David Lam Park', 4.2, 49.2724665529135, -123.12386556302295
);

INSERT INTO itineraries (
  city, city_img, trip_start, trip_end
) VALUES (
  'Vancouver', 'https://vancouver.ca/images/cov/feature/about-vancouver-landing-size.jpg', 1577404800, 1577491200
), (
  'Seattle', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Seattle_Kerry_Park_Skyline.jpg/1200px-Seattle_Kerry_Park_Skyline.jpg', 1585958400, 1586476800
);

INSERT INTO timeslots (
  start_time, end_time, itinerary_id, attraction_id, travel_mode
) VALUES (
  1577437200, 1577440800, 1, 1, NULL
), (
  1577440800, 1577442600, 1, NULL, 'WALK'
), (
  1577442600, 1577446200, 1, 2, NULL
), (
  1577446200, 1577451900, 1, NULL, 'BUS'
), (
  1577451900, 1577458800, 1, 3, NULL
), (
  1577523600, 1577527200, 1, 4, NULL
), (
  1577527200, 1577529900, 1, 4, 'BUS'
),(
  1577529900, 1577533500, 1, 5, NULL
), (
  1577533500, 1577536260, 1, NULL, 'BUS'
), (
  1577536260, 1577539500, 1, 6, NULL
), (
  1577539500, 1577543460, 1, NULL, 'BUS'
), (
  1577543460, 1577547060, 1, 7, NULL
);

INSERT INTO user_itinerary (
  user_id, itinerary_id
) VALUES (
  1, 1
), (
  2, 1
);

