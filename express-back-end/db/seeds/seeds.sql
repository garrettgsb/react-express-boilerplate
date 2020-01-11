INSERT INTO users (
  first_name, last_name, email, password
) VALUES ('Sherry', 'Nguyen', 'test@test.com', '123'
), (
  'Michelle', 'Siregar', 'test1@test.com', 'password'
), (
  'Stella', 'Zhou', 'test2@test.com', '456'
);

INSERT INTO itineraries (
  city, city_img, trip_start, trip_end
) VALUES (
  'Vancouver', 'https://vancouver.ca/images/cov/feature/about-vancouver-landing-size.jpg', 1577404800, 1577577540
), (
  'Seattle', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Seattle_Kerry_Park_Skyline.jpg/1200px-Seattle_Kerry_Park_Skyline.jpg', 1585958400, 1586476800
), (
  'New York City', 'https://lonelyplanetimages.imgix.net/a/g/hi/t/21c6ef0ba96e0ce5107a91c4506e2df7-statue-of-liberty.jpg', 1591747200, 1592179200
);

INSERT INTO attractions (
  name, review, latitude, longitude, photo, submitted_by
) VALUES (
  'Stanley Park', 3.4, 49.302488447038236, -123.14171791076662, 'https://images.dailyhive.com/20180412115108/shutterstock_155002466-1.jpg', 1
), (
  'Coal Harbour', 4, 49.291304, -123.123276, 'https://img.marinas.com/v2/48bca557237a5b47c21a9b7f736a2b10f2992fd44997e2cabfc05aa2e14676bf.jpg', 1
), (
  'Cypress', 4.3, 49.352945607771844, -123.17801846257264, 'https://biv.com/sites/default/files/styles/media_image/public/2018-03/cypressmountain.jpg', 1
), (
  'Third Beach', 3.5, 49.30338193650776, -123.1563403102008, 'https://live.staticflickr.com/6151/6187978554_45201526f5_4k.jpg', 2
), (
  'False Creek Seawall', 4.0, 49.27273179887483, -123.13379848089629, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/False_Creek_Blue_Hour.jpg/1280px-False_Creek_Blue_Hour.jpg', 2
), (
  'Earnest Ice Cream', 3.7, 49.26896525441082, -123.10261255924644, 'https://vancouverlookout.files.wordpress.com/2016/08/img_1296.jpg', 1
), (
  'David Lam Park', 4.2, 49.2724665529135, -123.12386556302295, 'https://media2.trover.com/T/5ba99858101f5e93460004ef/fixedw_large_4x.jpg', 1
), ('Space Needle', 5, 47.620422, -122.349358, 'https://images.rove.me/w_740,q_85/to7gz9toaypxpewy5rox/seattle-space-needle.jpg', 1),
('Central Park', 5, 40.785091, -73.968285, 'https://lonelyplanetimages.imgix.net/a/g/hi/t/e169d0c6394f2e1f46eea3f653f2b7b4-central-park.jpg', 1),
('Ellis Island', 5, 40.6997222, -74.0394444, 'https://lonelyplanetimages.imgix.net/a/g/hi/t/10dde96588c6cddf880e59c2f99f1fdd-ellis-island.jpg', 1),
('Metropolitan Museum of Art', 5, 40.778965, -73.962311, 'https://static01.nyt.com/images/2019/03/21/arts/21metcontemp-item1/2121metcontemp-item1-jumbo.jpg', 1),
('Empire State Building', 5, 40.748817, -73.985428, 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/33/e6.jpg', 1),
('Brooklyn Bridge', 5, 40.70569, -73.99639, 'https://loving-newyork.com/wp-content/uploads/2016/07/Brooklyn-Bridge_170614090305011-1600x960.jpg', 1),
('Statue of Liberty', 5, 40.689247, -74.044502, 'https://lonelyplanetimages.imgix.net/a/g/hi/t/21c6ef0ba96e0ce5107a91c4506e2df7-statue-of-liberty.jpg', 1),
('Coney Island', 5, 40.57788, -73.99403, 'https://lp-cms-production.imgix.net/features/2019/08/amusement-coney-island-shutterstockRF_332266760-08ffe08a73d3.jpg', 1),
('Grand Central Terminal', 5, 40.752655, -73.977295, 'https://untappedcities-wpengine.netdna-ssl.com/wp-content/uploads/2013/03/Grand-Central-Terminal-Aerial-View-from-Glass-Walkways-NYC.jpg', 1),
('American Museum of Natural History', 5, 40.7809345, -73.9737497, 'https://d21xlh2maitm24.cloudfront.net/nyc/natural-history-museum.jpg', 1)
;

INSERT INTO timeslots (
  start_time, end_time, itinerary_id, attraction_id, travel_mode
) VALUES (
  1577437200, 1577440800, 1, 1, NULL
), (
  1577440800, 1577442600, 1, NULL, 'WALKING'
), (
  1577442600, 1577446200, 1, 2, NULL
), (
  1577446200, 1577451900, 1, NULL, 'TRANSIT'
), (
  1577451900, 1577458800, 1, 3, NULL
), (
  1577523600, 1577527200, 1, 4, NULL
), (
  1577527200, 1577529900, 1, NULL, 'TRANSIT'
),(
  1577529900, 1577533500, 1, 5, NULL
), (
  1577533500, 1577536260, 1, NULL, 'CAR'
), (
  1577536260, 1577539500, 1, 6, NULL
), (
  1577539500, 1577543460, 1, NULL, 'TRANSIT'
), (
  1577543460, 1577547060, 1, 7, NULL
), (
  NULL, NULL, 2, 8, NULL
), (
  NULL, NULL, 3, 9, NULL
), (
  NULL, NULL, 3, 10, NULL
), (
  NULL, NULL, 3, 11, NULL
), (
  NULL, NULL, 3, 12, NULL
), (
  NULL, NULL, 3, 13, NULL
), (
  NULL, NULL, 3, 14, NULL
), (
  NULL, NULL, 3, 15, NULL
), (
  NULL, NULL, 3, 16, NULL
), (
  NULL, NULL, 3, 17, NULL
);

INSERT INTO user_itinerary (
  user_id, itinerary_id
) VALUES
(1, 1), 
(2, 1),
(1, 3),
(1, 2);

