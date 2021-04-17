--  id | building_id | user_id | area_id |         title          | building_rating | area_rating |                                                                comment                                                                | landlord_rating | recommend_to_friend 
-- ----+-------------+---------+---------+------------------------+-----------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------+-----------------+---------------------
--   1 |           1 |       1 |       1 | This place is amazing! |               5 |           4 | Great building with great ammenties around the building. Landlord is sensational!                                                     | t               | t
--   2 |           2 |       2 |       1 | Buyers Beware!         |               2 |           2 | The apartment might be nice but the surronding area is just so distracting and noisy! The landlord does not fix anything around here. | f               | f
--   3 |           3 |       2 |       2 | Great place to live!   |               5 |           5 | Ammentities are amazing, great view, great landlord                                                                                   | f               | f
--   4 |           4 |       3 |       2 | Could use some work!   |               3 |           3 | Landlords are trust worthy however area is lacking ammentities                                                                        | f               | f
-- (4 rows)


SELECT id AS id, 
  COUNT(id) FILTER (WHERE landlord_rating = 't')
FROM reviews;