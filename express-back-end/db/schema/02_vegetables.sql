DROP TABLE IF EXISTS vegetables CASCADE;
CREATE TABLE vegetables (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(255) NOT NULL,
description TEXT,
image_url VARCHAR(255) NOT NULL,
difficulty SMALLINT,
climate VARCHAR(50) NOT NULL,
sun_required VARCHAR(255) NOT NULL,
water_time SMALLINT,
harvest_date SMALLINT,
space SMALLINT
);