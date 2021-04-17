SELECT  	
  (SELECT cast(count(id) as decimal) FROM reviews WHERE landlord_rating = 't') / (SELECT cast(COUNT(id) as decimal) FROM reviews) AS landlord_approval_percentage;