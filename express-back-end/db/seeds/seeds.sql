-- Users 1-10

INSERT INTO users (username, email)
VALUES ('Jacqueline Smith', 'jacquelinesmith190@gmail.com');

INSERT INTO users (username, email)
VALUES ('Jerrica Joe', 'jerrica.mj@gmail.com');

INSERT INTO users (username, email)
VALUES ('Leaf Ittome', 'leafittomeapp@gmail.com');

INSERT INTO users (username, email)
VALUES ('michaelscarn', 'threatlevelmidnight@hotmail.com');

INSERT INTO users (username, email)
VALUES ('iLoveToRead', 'gimmedabooks@gmail.com');

INSERT INTO users (username, email)
VALUES ('randycordray', 'salesman101@hotmail.com');

INSERT INTO users (username, email)
VALUES ('burtmacklin', 'detectivemacklin@gmai.com');

INSERT INTO users (username, email)
VALUES ('arthurread', 'readingisfun@email.com');

INSERT INTO users (username, email)
VALUES ('lavarburton', 'readingrainbow@hotmail.com');

INSERT INTO users (username, email)
VALUES ('kclegg', 'kcg@hotmail.com');

INSERT INTO users (username, email)
VALUES ('mandrews', 'mandrews@email.ca');

INSERT INTO users (username, email)
VALUES ('asmith', 'smith.a@hotmail.com');

INSERT INTO users (username, email)
VALUES ('wshakespeare', 'willyshakes@hotmail.com');

INSERT INTO users (username, email)
VALUES ('jackjones', 'jj@hotmail.com');

INSERT INTO users (username, email)
VALUES ('malcomj', 'asdnpq@yahoo.com');

INSERT INTO users (username, email)
VALUES ('tammya', 'tammy@ymail.com');

INSERT INTO users (username, email)
VALUES ('jbrown', 'jjbrown@email.com');

INSERT INTO users (username, email)
VALUES ('calvinklein', 'ck@gmail.com');

INSERT INTO users (username, email)
VALUES ('jeremywinters', 'jpw@hotmail.com');

INSERT INTO users (username, email)
VALUES ('natashaj', 'natj@gmail.com');


-- Species
-- *The description section is from thespruce.com- remember to credit them in the ReadMe file

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Aloe Vera', 'Aloe Barbadensis', 'https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/aloe-vera-white-pot_sunwand24-ss_edit.jpg?itok=Y7HnaYk3', 'Aloe vera is commonly grown as a houseplant and gained favor because the gel from its leaves makes a soothing skin salve (although some people are actually irritated by the gel). It has thick, succulent leaves that are plumped up with a watery gel. The leaves grow from the base of the plant, in a rosette, and have jagged edges with flexible spines.', '14-21', 1, 4, 2, '15-24', 'Once per year', true);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('ZZ Plant', 'Zamioculcas Zamiifolia ', 'http://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_zz-plant_variant_medium_grant_terracotta_1200x.jpg?v=1613670666', 'Looking for a low-maintenance houseplant to spruce up your space without a big commitment? Look no further than the infamous ZZ plant, also known as the zanzibar gem! Characterized by their shiny, oval-shaped deep green leaves, ZZ plants make excellent additions to any home or office.', '3-7', 4, 3, 2, '18-24', 'None', true);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Snake Plant', 'Dracaena trifasciata (prev. Sanseveria trifasciata)', 'https://www.thespruce.com/thmb/3ZzeafMMYBupme3O5dodMz3uoxI=/2048x1545/filters:no_upscale():max_bytes(150000):strip_icc()/snake-plant-care-overview-1902772-04-3f69d04885af4613bf2eda197704fe20.jpg', 'The snake plant is one of the most popular and hardy species of houseplants. An architectural species, it features stiff leaves that range from six inches to eight feet tall, depending on the variety. Snake plants have also demonstrated the ability to remove formaldehyde and benzene from the air in several studies.', '10-14', 2, 3, 1, '21-30', 'None, may fertilize once or twice during growing season', true);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Spider Plant', 'Chlorophytum Comosum', 'https://cdn.shopify.com/s/files/1/0108/9460/6436/products/artificial-spider-plant-hanging-basket-nearly-natural-137604.jpg?v=1584171644', 'Despite the creepy-crawly name, the spider plant is among the most popular (and easiest to grow) of all hanging or trailing houseplants. While these exceptionally hardy plants will survive in less than perfect conditions, in perfect conditions they are stunning.', '5-7', 2, 2, 1, '21-30', 'None', false);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Boston Fern', 'Nephrolepis exaltata', 'https://thelittlebotanical.com/wp-content/uploads/2019/03/07_JT_006_1000x1000.jpg', 'The Boston fern, also known as the sword fern, is a popular fern species that grows in many tropical areas around the world. It is also commonly kept as a houseplant, especially because it doesn’t have high sunlight needs', '2-3', 5, 3, 3, '15-24', '8 weeks', false);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('African Violet', 'Saintpaulia Ionantha', 'https://brownsflorist.com/wp-content/uploads/2020/04/browns-10-scaled-e1590596735884.jpg', 'African violets are one of the most popular houseplants and for good reason. These compact, low-growing plants flower several times a year, and they are available in a multitude of leaf forms and colors. Do not be put off by their reputation for difficulty: providing you follow a few simple rules, African violets should thrive indoors.', '2', 5, 2, 4, '15-24', '2 weeks', false);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Haworthia', 'Haworthia', 'https://cdn.shopify.com/s/files/1/2097/3287/products/4.00-ozSucculent.ZebraPlant-Haworthiafasciata-count32_2048x@2x.jpg?v=1589641850', 'Haworthia is a delightful little succulent that makes a very attractive small houseplant. These small, low growing plants form rosettes of fleshy green leaves that are generously covered with white, pearly warts or bands, giving them a distinctive appearance.', '14-21',  1, 5, 2, '21-30', 'Twice per year', False);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Pothos', 'Epipremnum aureum', 'https://s7d1.scene7.com/is/image/terrain/58120890_000_a?$zoom2$', 'Pothos is arguably one of the easiest houseplants to grow, even if you are someone who forgets to water your plants often enough. This trailing vine, native to the Solomon Islands in the South Pacific, boasts pointed, heart-shaped green leaves that are sometimes variegated with white, yellow, or pale green striations.', '7-14', 2, 1, 1, '18-24', 'Optional, can be done twice per month', true);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Fiddle-Leaf Fig', 'Ficus lyrata', 'https://cb2.scene7.com/is/image/CB2/PottedFiddleLeafFigSHF17','The fiddle-leaf fig is a popular indoor specimen plant featuring very large, heavily veined, violin-shaped leaves that grow upright. These plants are native to tropical parts of Africa, where they thrive in very warm and wet conditions. This makes them somewhat challenging for the home grower, who is likely to have trouble duplicating these steamy conditions.', '7 to 10', 3, 4, 5, '15-30', '2 weeks', true);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Monstera', 'Monstera Deliciosa', 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1205923822-612x612-1597694031.jpg', 'Native to the rainforests of Central America, the Monstera deliciosa plant is also known as the tropical split-leaf philodendron. Indoors, the plant grows about two feet high, its leathery, glossy, characteristic split and heart-shaped leaves coming from intricate aerial roots, which can be used for ropes and basket making.', '14', 2, 4, 3, '18-30', 'Optional, can be done twice per month', true);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Chinese Money Plant', 'Pilea peperomioides', 'https://cdn.shopify.com/s/files/1/0174/7796/products/8D2A1989_2048x2048.jpg?v=1595286173', 'The Pilea peperomioides is a popular houseplant thanks to its attractive coin-shaped foliage and ease of care. This flowering perennial in the nettle family (Urticaceae) is native to southern China, growing naturally along the base of the Himalayan mountains.', '7', 3, 4, 2, '13-30', 'Once per month', false);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Echeveria', 'Pilea peperomioides', 'http://www.llifle.com/photos/Echeveria_agavoides_5212_l.jpg', 'Echeverias are one of the most popular types of succulents and are frequently featured in succulent gardens, floral arrangements, terrariums, artwork, and even wedding cakes. Their stunning rosette shape, plump leaves, and large variety of colors give them a striking resemblance to flowers which makes them easy to decorate with. Their unique appearance and low maintenance needs have made Echeverias widely popular.', '14-21', 1, 5, 2, '15-27', 'Once per year in the spring', false);







-- New plants

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Peace Lily', 'Spathiphyllum wallisii', 'https://www.mydomaine.com/thmb/9aB79USSkhiCVgGyXh1TBSvM7v8=/900x900/filters:fill(auto,1)/1566417254329_20190821-1566417255317-b9314f1d9f7a4668a466c5ffb1913a8f.jpg', 'The graceful white spathes of the peace lily have long been rendered in silk plants, but there''s no reason to go fake when the living specimens of Spathiphyllum wallisii are so easy to grow. Peace lilies do well in low light, but need regular moisture.', '7', 3, 1, 1, '18-27', '6 weeks in spring and summer', true);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Air Plant', 'Tillandsia genus', 'https://cdn.shopify.com/s/files/1/0662/5489/products/tillansdsia_Xerographica_air_plant-large.jpg?v=1609198614', 'The Tillandsia genus has breathed new life into the terrarium hobby. Although these plants do grow without any soil, they still need bright light and weekly watering, which you can achieve with a heavy spritz from a spray bottle or by dunking the whole plant in water.', '7', 3, 5, 2, '10-32', 'None', false);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Jade Plant', 'Crassula ovata', 'https://www.almanac.com/sites/default/files/image_nodes/jade-planting-growing.jpg', 'You can''t go wrong with a Crassula ovata in a bright room: It''s every bit as pretty as those trendy faux plants you see at the hobby store, only fake plants don''t continue to grow and become more stately over time like real jade plants do. Water sparingly and add supplemental lighting if leaf drop occurs.', '14-21', 1, 5, 2, '18-24', '6 months', true);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Bromeliad', 'Bromeliaceae', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWZDh8CEL4KAUKRV5I180B8iavHqnqwNbr6Q&usqp=CAU', 'In their native habitat, plants in the Bromeliaceae family grow as epiphytes nestled in trees. That means two things for their care: they like filtered light, and good aeration around their roots. Orchid potting medium works well. Fill their stiff leaves with distilled water to further mimic nature''s way.', '7', 3, 3, 3, '13-27', '3-4 months', false);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Lucky Bamboo', 'Dracaena sanderiana', 'https://assets.eflorist.com/assets/products/PHR_/T100-2A.jpg', 'The ability to grow in water and the pliable stems that you can weave into grids or braids make Dracaena sanderiana a handsome statement in any small space. Lucky bamboo ceases to grow when you clip the top, making it easy to manage, unlike the bamboo that grows outdoors. Grow in low light or artificial light.', '7-10', 3, 1, 2, '18-35', 'once per month', false);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Orchid', 'Phalaenopsis genus', 'https://www.gardeningknowhow.com/wp-content/uploads/2021/03/orchid-houseplant.jpg', 'To grow an orchid, you have to think like an orchid. The golden rule for orchid success is to duplicate the plant''s natural conditions as closely as possible. In nature, most orchids are epiphytes, meaning they grow on other objects, clinging to rough bark or even stone. The showy orchids favored by most people are usually either phalaenopsis hybrids (so-called moth orchids) or dendrobium hybrids.', '5-7', 3, 5, 4, '18-27', 'once per week', false);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Basil', 'Ocimum basilicum', 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,w_730/gen-workflow%2Fproduct-listing%2Fbasilplanthd', 'Your favorite herb just became your favorite houseplant. Basil loves warm temperatures and lots of light. Trim off flowers to keep those fragrant leaves coming. Try cinnamon basil or purple basil for something different.', '1-5',  5, 4, 3, '21-30', 'Twice per year', False);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Ivy', 'Hedera helix','https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/157985sx.jpg', 'A container of trailing Hedera helix is an instant upgrade for your kitchen, bathroom, or anywhere you have bright light and some humidity. Cooler rooms that remain at or below 70 degrees Fahrenheit will also extend the life of these Northern European natives.', '5-7', 3, 2, 2, '10-21', 'Once per month', true);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Umbrella Plant', 'Schefflera arboricola', 'https://images.saymedia-content.com/.image/t_share/MTc0MzM2MzI4NDM4MjYxMzgy/how-to-grow-an-umbrella-plant-indoors-or-outdoors.jpg','If you have a yen for tropical plants, check out the Schefflera arboricola, which can grow up to ten feet tall in the jungles of Taiwan. You can check this growth in containers, especially with slow growing variegated cultivars like Gold Capella or Sunburst.', '14', 2, 5, 2, '12-24', 'None', true);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Croton', 'Monstera Deliciosa', 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1205923822-612x612-1597694031.jpg', 'Native to the rainforests of Central America, the Monstera deliciosa plant is also known as the tropical split-leaf philodendron. Indoors, the plant grows about two feet high, its leathery, glossy, characteristic split and heart-shaped leaves coming from intricate aerial roots, which can be used for ropes and basket making.', '14', 2, 4, 3, '18-30', 'Optional, can be done twice per month', true);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Dumb Cane Plant', 'Pilea peperomioides', 'https://cdn.shopify.com/s/files/1/0174/7796/products/8D2A1989_2048x2048.jpg?v=1595286173', 'The Pilea peperomioides is a popular houseplant thanks to its attractive coin-shaped foliage and ease of care. This flowering perennial in the nettle family (Urticaceae) is native to southern China, growing naturally along the base of the Himalayan mountains.', '7', 3, 4, 2, '13-30', 'Once per month', false);

INSERT INTO species (common_name, scientific_name, photo_url, description, watering_instructions, watering_requirement_rating, sunlight_requirement_rating, difficulty_rating, temperature_requirements, fertilizer_requirements, poison_for_pets)
VALUES ('Majesty Palm', 'Pilea peperomioides', 'http://www.llifle.com/photos/Echeveria_agavoides_5212_l.jpg', 'Echeverias are one of the most popular types of succulents and are frequently featured in succulent gardens, floral arrangements, terrariums, artwork, and even wedding cakes. Their stunning rosette shape, plump leaves, and large variety of colors give them a striking resemblance to flowers which makes them easy to decorate with. Their unique appearance and low maintenance needs have made Echeverias widely popular.', '14-21', 1, 5, 2, '15-27', 'Once per year in the spring', false);



-- Wishlist

INSERT INTO wishlist (user_id, species_id)
VALUES (1, 1);

INSERT INTO wishlist (user_id, species_id)
VALUES (1, 2);

INSERT INTO wishlist (user_id, species_id)
VALUES (1, 3);

INSERT INTO wishlist (user_id, species_id)
VALUES (2, 4);

INSERT INTO wishlist (user_id, species_id)
VALUES (2, 5);

INSERT INTO wishlist (user_id, species_id)
VALUES (2, 6);

INSERT INTO wishlist (user_id, species_id)
VALUES (3, 3);

INSERT INTO wishlist (user_id, species_id)
VALUES (3, 4);

INSERT INTO wishlist (user_id, species_id)
VALUES (3, 5);

INSERT INTO wishlist (user_id, species_id)
VALUES (4, 6);

INSERT INTO wishlist (user_id, species_id)
VALUES (4, 7);

INSERT INTO wishlist (user_id, species_id)
VALUES (5, 1);

INSERT INTO wishlist (user_id, species_id)
VALUES (5, 2);






-- Plants
INSERT INTO plants (user_id, species_id, nickname, is_dead, cause_of_death)
VALUES (1, 4, 'Alice', true, 'lack of water');

INSERT INTO plants (user_id, species_id, nickname, is_dead, cause_of_death)
VALUES (1, 11, 'Carter', true, 'neglect');

INSERT INTO plants (user_id, species_id, nickname, is_dead, cause_of_death)
VALUES (1, 12, 'Avery', true, 'drowning');

INSERT INTO plants (user_id, species_id, nickname, is_dead)
VALUES (1, 5, 'Amanda', false);

INSERT INTO plants (user_id, species_id, nickname, is_dead)
VALUES (1, 7, 'Ferdinand', false);

INSERT INTO plants (user_id, species_id, nickname, is_dead)
VALUES (1, 6, 'Joey', false);

INSERT INTO plants (user_id, species_id, nickname, is_dead)
VALUES (1, 8, 'Courtney', false);

INSERT INTO plants (user_id, species_id, nickname, is_dead)
VALUES (1, 9, 'Adam', false);

INSERT INTO plants (user_id, species_id, nickname, is_dead)
VALUES (1, 10, 'Liz', false);





INSERT INTO plants (user_id, species_id, nickname, is_dead, cause_of_death)
VALUES (2, 7, 'Max', true, 'froze to death');

INSERT INTO plants (user_id, species_id, nickname, is_dead, cause_of_death)
VALUES (2, 8, 'Monica', true, 'lack of sunlight');

INSERT INTO plants (user_id, species_id, nickname, is_dead, cause_of_death)
VALUES (2, 9, 'Bob', true, 'dehydration');

INSERT INTO plants (user_id, species_id, nickname, is_dead)
VALUES (2, 3, 'Bruce', false);

INSERT INTO plants (user_id, species_id, nickname, is_dead)
VALUES (2, 1, 'Fiona', false);

INSERT INTO plants (user_id, species_id, nickname, is_dead)
VALUES (2, 2, 'Owen', false);

INSERT INTO plants (user_id, species_id, nickname, is_dead)
VALUES (2, 10, 'Ross', false);

INSERT INTO plants (user_id, species_id, nickname, is_dead)
VALUES (2, 11, 'Rachel', false);

INSERT INTO plants (user_id, species_id, nickname, is_dead)
VALUES (2, 12, 'Janet', false);




INSERT INTO plants (user_id, species_id, nickname, is_dead, cause_of_death)
VALUES (3, 1, 'Khloe', true, 'too much water');

INSERT INTO plants (user_id, species_id, nickname, is_dead, cause_of_death)
VALUES (3, 2, 'Chandler', true, 'attacked by a cat');

INSERT INTO plants (user_id, species_id, nickname, is_dead, cause_of_death)
VALUES (3, 3, 'Archie', true, 'dehydration due to neglect');

INSERT INTO plants (user_id, species_id, nickname, is_dead)
VALUES (3, 4, 'Jordan', false);

INSERT INTO plants (user_id, species_id, nickname, is_dead)
VALUES (3, 5, 'Betty', false);

INSERT INTO plants (user_id, species_id, nickname, is_dead)
VALUES (3, 6, 'Veronica', false);

INSERT INTO plants (user_id, species_id, nickname, is_dead)
VALUES (3, 10, 'Scotty', false);

INSERT INTO plants (user_id, species_id, nickname, is_dead)
VALUES (3, 11, 'Reggie', false);

INSERT INTO plants (user_id, species_id, nickname, is_dead)
VALUES (3, 12, 'Kylie', false);





-- Tasks
INSERT INTO tasks (task, plant_id, user_id, task_date, task_complete)
VALUES ('Water plant', 4, 1, '2021-03-27', false);

INSERT INTO tasks (task, plant_id, user_id, task_date, task_complete)
VALUES ('Fertilize plant', 5, 1, '2021-03-28', false);

INSERT INTO tasks (task, plant_id, user_id, task_date, task_complete)
VALUES ('Water plant', 6, 1, '2021-03-30', false);

INSERT INTO tasks (task, plant_id, user_id, task_date, task_complete)
VALUES ('Water plant', 7, 1, '2021-03-30', false);

INSERT INTO tasks (task, plant_id, user_id, task_date, task_complete)
VALUES ('Fertilize plant', 8, 1, '2021-04-01', false);

INSERT INTO tasks (task, plant_id, user_id, task_date, task_complete)
VALUES ('Water plant', 9, 1, '2021-03-30', false);


INSERT INTO tasks (task, plant_id, user_id, task_date, task_complete)
VALUES ('Water plant', 13, 2, '2021-03-27', false);

INSERT INTO tasks (task, plant_id, user_id, task_date, task_complete)
VALUES ('Fertilize plant', 14, 2, '2021-03-28', false);

INSERT INTO tasks (task, plant_id, user_id, task_date, task_complete)
VALUES ('Water plant', 15, 2, '2021-03-30', false);

INSERT INTO tasks (task, plant_id, user_id, task_date, task_complete)
VALUES ('Water plant', 16, 2, '2021-03-30', false);

INSERT INTO tasks (task, plant_id, user_id, task_date, task_complete)
VALUES ('Fertilize plant', 17, 2, '2021-04-01', false);

INSERT INTO tasks (task, plant_id, user_id, task_date, task_complete)
VALUES ('Water plant', 18, 2, '2021-03-30', false);



INSERT INTO tasks (task, plant_id, user_id, task_date, task_complete)
VALUES ('Water plant', 22, 3, '2021-03-27', false);

INSERT INTO tasks (task, plant_id, user_id, task_date, task_complete)
VALUES ('Fertilize plant', 23, 3, '2021-03-28', false);

INSERT INTO tasks (task, plant_id, user_id, task_date, task_complete)
VALUES ('Water plant', 24, 3, '2021-03-30', false);

INSERT INTO tasks (task, plant_id, user_id, task_date, task_complete)
VALUES ('Water plant', 25, 3, '2021-03-30', false);

INSERT INTO tasks (task, plant_id, user_id, task_date, task_complete)
VALUES ('Fertilize plant', 26, 3, '2021-04-01', false);

INSERT INTO tasks (task, plant_id, user_id, task_date, task_complete)
VALUES ('Water plant', 27, 3, '2021-03-30', false);








