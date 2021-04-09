DROP TABLE IF EXISTS "users" CASCADE;
CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "username" VARCHAR(255) NOT NULL,
  "email" VARCHAR(255) NOT NULL,
  "password" VARCHAR(255) NOT NULL,
  "created_at" TIMESTAMP
);

DROP TABLE IF EXISTS "reviews" CASCADE;
CREATE TABLE "reviews" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "building_id" [FK],
  "user_id" [FK],
  "title" VARCHAR(255) NOT NULL,
  "building_rating" INTEGER NOT NULL,
  "area_rating" INTEGER NOT NULL,
  "comment" TEXT,
  "landlord_rating" BOOLEAN,
  "recommend_to_friend" BOOLEAN
);

DROP TABLE IF EXISTS "buildings" CASCADE;
CREATE TABLE "buildings" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "area_id" [FK],
  "name" VARCHAR(255) NOT NULL,
  "address" VARCHAR(255) NOT NULL,
  "image_url" VARCHAR(255) NOT NULL,
  "latitude" FLOAT NOT NULL,
  "longitude" FLOAT NOT NULL
);

DROP TABLE IF EXISTS "areas" CASCADE;
CREATE TABLE "areas" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "name" VARCHAR(255)
);

DROP TABLE IF EXISTS "favourites" CASCADE;
CREATE TABLE "favourites" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "user_id" [FK],
  "building_id" [FK]
);

DROP TABLE IF EXISTS "amenities" CASCADE;
CREATE TABLE "amenities" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "area_id" [FK],
  "name" VARCHAR(255) NOT NULL,
  "address" VARCHAR(255) NOT NULL,
  "image_url" VARCHAR(255) NOT NULL,
  "latitude" FLOAT NOT NULL,
  "longitude" FLOAT NOT NULL
);

ALTER TABLE "reviews" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "reviews" ADD FOREIGN KEY ("building_id") REFERENCES "buildings" ("id");

ALTER TABLE "buildings" ADD FOREIGN KEY ("area_id") REFERENCES "areas" ("id");

ALTER TABLE "favourites" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "favourites" ADD FOREIGN KEY ("building_id") REFERENCES "buildings" ("id");

ALTER TABLE "amenities" ADD FOREIGN KEY ("area_id") REFERENCES "areas" ("id");
