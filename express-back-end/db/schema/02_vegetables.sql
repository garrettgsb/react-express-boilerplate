DROP TABLE IF EXISTS vegetables CASCADE;
CREATE TABLE vegetables (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(255) NOT NULL,
description TEXT,
image_url VARCHAR(255) NOT NULL,
avatar_url VARCHAR(255) NOT NULL,
difficulty SMALLINT,
depth DECIMAL,
climate VARCHAR(50) NOT NULL,
sun_required SMALLINT,
water_time SMALLINT,
harvest_date SMALLINT,
space SMALLINT
);