  
      SELECT users.id, users.name, users.email, users.password, users.bio, users.age, users.is_active, genders.value AS Gender, drinks.value AS Drink, exercises.value AS Exercise, dating_goals.value AS Goal, user_photos.url AS Profile_photo
      FROM users
      LEFT JOIN genders ON users.gender_id = genders.id
      LEFT JOIN drinks ON users.drink_id = drinks.id
      LEFT JOIN exercises ON users.exercise_id = exercises.id
      LEFT JOIN dating_goals ON users.dating_goal_id = dating_goals.id
      LEFT JOIN user_photos ON user_photos.user_id = users.id
      WHERE users.id = 2 AND user_photos.is_profile is TRUE;
      
    