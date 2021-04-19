-- SELECT 
--   (SELECT cast(count(id) as decimal) FROM reviews WHERE recommend_to_friend = 't') / (SELECT cast(COUNT(id) as decimal) FROM reviews) AS recommend_to_friend_percentage;


-- SELECT buildings.id AS building_id, buildings.area_id AS area_id, buildings.name AS name, buildings.address AS building_address, buildings.neighbourhood AS neighbourhood, buildings.image_url AS image_url, buildings.longitude AS longitude, buildings.latitude AS latitude,
-- (SELECT (SELECT cast(count(id) as decimal) FROM reviews WHERE landlord_rating = 't' and building_id=109) / (SELECT cast(COUNT(id) as decimal) FROM reviews where building_id = 109) AS landlord_ratio, 
-- (SELECT (SELECT cast(count(id) as decimal) FROM reviews WHERE recommend_to_friend = 't' and building_id=109) / (SELECT cast(COUNT(id) as decimal) FROM reviews where building_id = 109)) AS recommend_to_friend_ratio
-- FROM buildings
-- WHERE buildings.id = 109;

      
SELECT buildings.id AS building_id, buildings.area_id AS area_id, buildings.name AS name, buildings.address AS building_address, buildings.neighbourhood AS neighbourhood, buildings.image_url AS image_url, buildings.longitude AS longitude, buildings.latitude AS latitude,
(SELECT ROUND(AVG(building_rating),0)::INTEGER 
AS average_building_rating FROM reviews where building_id = 109),
(SELECT ((SELECT cast(count(id) as decimal) FROM reviews WHERE landlord_rating = 't' and building_id=109) / (SELECT cast(COUNT(id) as decimal) FROM reviews where building_id = 109))::INTEGER)*100 
AS landlord_ratio, 
(SELECT ((SELECT cast(count(id) as decimal) FROM reviews WHERE recommend_to_friend = 't' and building_id=109) / (SELECT cast(COUNT(id) as decimal) FROM reviews where building_id = 109))::INTEGER)*100 
AS recommend_to_friend_ratio
FROM buildings
WHERE buildings.id = 109;