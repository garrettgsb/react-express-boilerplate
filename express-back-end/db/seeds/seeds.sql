-- Users 

INSERT INTO users (first_name, last_name, email, password, authID)
VALUES ('Scarlett', 'Macaw', 'tropical_bird@gmail.com', 'password1', '12345678');

INSERT INTO users (first_name, last_name, email, password, authID)
VALUES ('Sulpher-Crested', 'Cockatoo', 'cheeky_bird@gmail.com', 'password2', '87654321');

INSERT INTO users (first_name, last_name, email, password, authID)
VALUES ('Rainbow', 'Lorikeet', 'australian_bird@gmail.com', 'password3', '11111111');

INSERT INTO users (first_name, last_name, email, password, authID)
VALUES ('Canada', 'Goose', 'scary_bird@gmail.com', 'password4', '22222222');

INSERT INTO users (first_name, last_name, email, password, authID)
VALUES ('African', 'Grey', 'smart_bird@gmail.com', 'password5', '33333333');

-- Wishlist

INSERT INTO wishlist (user_id, species_id)
VALUES (1, 1);

INSERT INTO wishlist (user_id, species_id)
VALUES (1, 2);

INSERT INTO wishlist (user_id, species_id)
VALUES (1, 3);

-- Species 

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Alo Vera', 'Aloe Barbadensis', 'https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/aloe-vera-white-pot_sunwand24-ss_edit.jpg?itok=Y7HnaYk3', 'Plant description here', 'Every 14-21 days', 1, 4, 2, '15-24 C', 'Once per year', true);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('ZZ Plant', 'Zamioculcas Zamiifolia ', 'http://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_zz-plant_variant_medium_grant_terracotta_1200x.jpg?v=1613670666', 'Plant description here', 'Every 3-7 days', 4, 3, 2, '18-24 C', 'None', true);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Snake Plant', 'Dracaena trifasciata (prev. Sanseveria trifasciata)', 'https://www.thespruce.com/thmb/3ZzeafMMYBupme3O5dodMz3uoxI=/2048x1545/filters:no_upscale():max_bytes(150000):strip_icc()/snake-plant-care-overview-1902772-04-3f69d04885af4613bf2eda197704fe20.jpg', 'Plant description here', 'Every 10-14 days', 2, 3, 1, '21-30 C', 'None, may fertilize once or twice during growing season', true);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Spider Plant', 'Chlorophytum Comosum', 'https://cdn.shopify.com/s/files/1/0108/9460/6436/products/artificial-spider-plant-hanging-basket-nearly-natural-137604.jpg?v=1584171644', 'Plant description here', 'Every 5-7 days', 2, 2, 1, '21-30 C', 'None', false);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Boston Fern', 'Nephrolepis exaltata', 'https://thelittlebotanical.com/wp-content/uploads/2019/03/07_JT_006_1000x1000.jpg', 'Plant description here', 'Every 2-3 days', 5, 3, 3, '15-24 C', 'Every 8 weeks', false);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('African Violet', 'Saintpaulia Ionantha', 'https://brownsflorist.com/wp-content/uploads/2020/04/browns-10-scaled-e1590596735884.jpg', 'Plant description here', 'Every 2 days', 5, 2, 4, '15-24 C', 'Every 2 weeks', false);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Haworthia', 'Haworthia', 'https://cdn.shopify.com/s/files/1/2097/3287/products/4.00-ozSucculent.ZebraPlant-Haworthiafasciata-count32_2048x@2x.jpg?v=1589641850', 'Plant description here', 'Every 14-21 days',  1, 5, 2, '21-30 C', 'Twice per year', False);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Pothos', 'Epipremnum aureum', 'https://s7d1.scene7.com/is/image/terrain/58120890_000_a?$zoom2$', 'Plant description here', 'Every 7-14 days', 2, 1, 1, '18-24 C', 'Optional, can be done twice per month', true);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Fiddle Leaf Fig', 'Ficus lyrata', 'https://cb2.scene7.com/is/image/CB2/PottedFiddleLeafFigSHF17','Plant description here', 'Every 7 to 10 days', 2, 3, 5, '15-30 C', 'Every 2 weeks', true);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Monstera', 'Monstera Deliciosa', 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1205923822-612x612-1597694031.jpg', 'Plant description here', 'Every 14 days', 2, 4, 4, '18-30 C', 'Optional, can be done twice per month', true);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Chinese Money Plant', 'Pilea peperomioides', 'Every 7 days', 'https://cdn.shopify.com/s/files/1/0174/7796/products/8D2A1989_2048x2048.jpg?v=1595286173', 'Plant description here', 3, 4, 2, '13-30 C', 'Once per month', false);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Echeveria', 'Pilea peperomioides', 'https://cdn.shopify.com/s/files/1/0174/7796/products/8D2A1989_2048x2048.jpg?v=1595286173', 'Plant description here', 'Every 14-21 Days', 1, 5, 2, '15-27 C', 'Once per year in the spring', false);

-- Plants

INSERT INTO plants (user_id, species_id, nickname, is_dead)
VALUES (1, 5, "Amanda", false);

INSERT INTO plants (user_id, species_id, nickname, is_dead)
VALUES (2, 3, "Ferdinand", false);

INSERT INTO plants (user_id, species_id, nickname, is_dead)
VALUES (3, 6, "Joey", false);

INSERT INTO plants (user_id, species_id, nickname, is_dead)
VALUES (5, 5, "Alice", true);

-- Tasks
INSERT INTO tasks (task, plant_id, user_id, task_date, task_complete)
VALUES ("Water plant", 1, 1, 2021-03-27, false)

INSERT INTO tasks (task, plant_id, user_id, task_date, task_complete)
VALUES ("Fertilize plant", 2, 2, 2021-03-28, false)

INSERT INTO tasks (task, plant_id, user_id, task_date, task_complete)
VALUES ("Water plant", 3, 3, 2021-03-30, false)


