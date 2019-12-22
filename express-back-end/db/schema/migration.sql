DROP TABLE IF EXISTS users, attractions, itineraries, timeslots, transportation
CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "fist_name" VARCHAR(50),
  "last_name" VARCHAR(50),
  "email" VARCHAR(50) NOT NULL,
  "password" VARCHAR(50) NOT NULL,
  "facebook" VARCHAR(50) NOT NULL,
  "created_at" TIMESTAMP
);

CREATE TABLE "attractions" (
  "id" SERIAL PRIMARY KEY NOT NULL, 
  "name" VARCHAR(100),
  "description" text,
  "review" text,
  "latitude" float,
  "longitude" float,
  "open_time" datetime,
  "close_time" datetime,
  "visit_duration" int,
  "photo" string,
  "location" varchar
);

CREATE TABLE "itineraries" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "city" string,
  "city_img" string,
  "start_time" timestamp,
  "end_time" timestamp
);

CREATE TABLE "timeslots" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "start_time" timestamp,
  "end_time" timestamp,
  "itinerary_id" int,
  "attraction_id" int,
  "travel_id" int
);

CREATE TABLE "transportations" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "mode" string
);

CREATE TABLE "user_itinerary" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "user_id" int,
  "itinerary_id" int
);

ALTER TABLE "timeslots" ADD FOREIGN KEY ("itinerary_id") REFERENCES "itineraries" ("id");

ALTER TABLE "timeslots" ADD FOREIGN KEY ("attraction_id") REFERENCES "attractions" ("id");

ALTER TABLE "timeslots" ADD FOREIGN KEY ("travel_id") REFERENCES "transportations" ("id");

ALTER TABLE "user_itinerary" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "user_itinerary" ADD FOREIGN KEY ("itinerary_id") REFERENCES "itineraries" ("id");