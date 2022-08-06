  
      SELECT users.id, users.name, users.email, users.password, users.bio, users.age, users.is_active, genders.value AS gender, drinks.value AS drink, exercises.value AS exercise, dating_goals.value AS goal
      FROM users
      LEFT JOIN genders ON users.gender_id = genders.id
      LEFT JOIN drinks ON users.drink_id = drinks.id
      LEFT JOIN exercises ON users.exercise_id = exercises.id
      LEFT JOIN dating_goals ON users.dating_goal_id = dating_goals.id
      WHERE users.id = 1 ;
      
    