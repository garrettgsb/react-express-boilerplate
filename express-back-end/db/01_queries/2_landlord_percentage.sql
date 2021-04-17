SELECT  	
  (SELECT cast(count(id) as decimal) FROM reviews WHERE recommend_to_friend = 't') / (SELECT cast(COUNT(id) as decimal) FROM reviews) AS recommend_to_friend_percentage;
