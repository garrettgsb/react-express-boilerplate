--  id | building_id | user_id | area_id |         title          | building_rating | area_rating |                                                                comment                                                                | landlord_rating | recommend_to_friend 
-- ----+-------------+---------+---------+------------------------+-----------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------+-----------------+---------------------
--   5 |           1 |       1 |       1 | This place is amazing! |               5 |           4 | Great building with great ammenties around the building. Landlord is sensational!                                                     | t               | t
--   6 |           2 |       2 |       1 | Buyers Beware!         |               2 |           2 | The apartment might be nice but the surronding area is just so distracting and noisy! The landlord does not fix anything around here. | f               | f
--   7 |           3 |       2 |       2 | Great place to live!   |               5 |           5 | Ammentities are amazing, great view, great landlord                                                                                   | f               | f
--   8 |           4 |       3 |       2 | Could use some work!   |               3 |           3 | Landlords are trust worthy however area is lacking ammentities                                                                        | f               | f



-- SELECT areas.name AS area_name, ROUND(AVG(area_rating),0) AS average_area_rating
-- FROM reviews
-- JOIN areas ON area_id = areas.id
-- GROUP BY areas.name
-- ORDER BY average_area_rating DESC;

      SELECT buildings.id AS building_id, buildings.area_id AS area_id, buildings.name AS name, buildings.address AS building_address, buildings.neighbourhood AS neighbourhood, buildings.image_url AS image_url, buildings.longitude AS longitude, buildings.latitude AS latitude,
      (SELECT ROUND(AVG(building_rating),0)::INTEGER 
      AS average_building_rating FROM reviews where building_id = 111),
      ROUND((SELECT ((SELECT cast(count(id) as decimal) FROM reviews WHERE landlord_rating = 'true' and building_id=111) / (SELECT cast(COUNT(id) as decimal) FROM reviews where building_id = 111))*100),0)
      AS landlord_ratio, 
      ROUND((SELECT ((SELECT cast(count(id) as decimal) FROM reviews WHERE recommend_to_friend = 'true' and building_id=111) / (SELECT cast(COUNT(id) as decimal) FROM reviews where building_id = 111))*100),0)
      AS recommend_to_friend_ratio
      FROM buildings
      WHERE buildings.id = 111;