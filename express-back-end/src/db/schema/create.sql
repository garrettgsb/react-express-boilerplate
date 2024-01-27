DROP TABLE IF EXISTS gas_stations; 
CREATE TABLE gas_stations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    rating DECIMAL,
    user_ratings_total INTEGER,
    vicinity VARCHAR(255),
    lat DOUBLE PRECISION,
    lng DOUBLE PRECISION
);
