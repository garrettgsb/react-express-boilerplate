DROP TABLE IF EXISTS users, attractions, itineraries, timeslots, transportation, user_itinerary CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  facebook VARCHAR(50)
  /*created_at TIMESTAMP*/
);

CREATE TABLE attractions (
  id SERIAL PRIMARY KEY NOT NULL, 
  name VARCHAR(100),
  description TEXT,
  review INTEGER,
  latitude FLOAT,
  longitude FLOAT,
  open_time TIME,
  close_time TIME,
  visit_duration INTEGER,
  photo varchar(255),
  location varchar(255)
);

CREATE TABLE itineraries (
  id SERIAL PRIMARY KEY NOT NULL,
  city VARCHAR(50),
  city_img varchar(255),
  start_time TIMESTAMP,
  end_time TIMESTAMP
);

CREATE TABLE timeslots (
  id SERIAL PRIMARY KEY NOT NULL,
  start_time TIMESTAMP,
  end_time TIMESTAMP,
  itinerary_id INTEGER REFERENCES itineraries(id) ON DELETE CASCADE,
  attraction_id INTEGER REFERENCES attractions(id) ON DELETE CASCADE,
  travel_mode VARCHAR(50)
);

CREATE TABLE user_itinerary (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  itinerary_id INTEGER REFERENCES itineraries(id) ON DELETE CASCADE
);