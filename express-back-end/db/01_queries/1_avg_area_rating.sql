--  id | building_id | user_id | area_id |         title          | building_rating | area_rating |                                                                comment                                                                | landlord_rating | recommend_to_friend 
-- ----+-------------+---------+---------+------------------------+-----------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------+-----------------+---------------------
--   5 |           1 |       1 |       1 | This place is amazing! |               5 |           4 | Great building with great ammenties around the building. Landlord is sensational!                                                     | t               | t
--   6 |           2 |       2 |       1 | Buyers Beware!         |               2 |           2 | The apartment might be nice but the surronding area is just so distracting and noisy! The landlord does not fix anything around here. | f               | f
--   7 |           3 |       2 |       2 | Great place to live!   |               5 |           5 | Ammentities are amazing, great view, great landlord                                                                                   | f               | f
--   8 |           4 |       3 |       2 | Could use some work!   |               3 |           3 | Landlords are trust worthy however area is lacking ammentities                                                                        | f               | f



SELECT areas.name AS area_name, ROUND(AVG(area_rating),0) AS average_area_rating
FROM reviews
JOIN areas ON area_id = areas.id
GROUP BY areas.name
ORDER BY average_area_rating DESC;