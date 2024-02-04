<<<<<<< HEAD
DROP TABLE IF EXISTS gas_stations;
CREATE TABLE gas_stations(
   id             INTEGER  NOT NULL PRIMARY KEY 
  ,name           VARCHAR(255) NOT NULL
  ,vicinity       VARCHAR(255) NOT NULL
  ,payment_method VARCHAR(255)
  ,fuel_type      VARCHAR(255)
);


DROP TABLE IF EXISTS gas_prices;
CREATE TABLE gas_prices(
   id             SERIAL  NOT NULL PRIMARY KEY
  ,gas_station_id INTEGER  NOT NULL REFERENCES gas_stations(id)
  ,regular_price  NUMERIC(4,2) NOT NULL
  ,premium_price  NUMERIC(4,2) NOT NULL
  ,diesel_price   NUMERIC(4,2) NOT NULL
);

-- Adding foreign key constraint
ALTER TABLE gas_prices
ADD CONSTRAINT fk_gas_station
FOREIGN KEY (gas_station_id)
REFERENCES gas_stations(id);

DROP TABLE IF EXISTS locations;
CREATE TABLE locations(
   id             INTEGER  NOT NULL PRIMARY KEY 
  ,gas_station_id INTEGER  NOT NULL REFERENCES gas_stations(id)
  ,lat            NUMERIC(15,7) NOT NULL
  ,lng            NUMERIC(15,7) NOT NULL
  ,street         VARCHAR(34)
  ,city           VARCHAR(31)
  ,province       VARCHAR(25) NOT NULL
  ,postal_code    VARCHAR(7)
);

ALTER TABLE locations
ADD CONSTRAINT fk_gas_station
FOREIGN KEY (gas_station_id)
REFERENCES gas_stations(id);

DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews(
   id                 INTEGER  NOT NULL PRIMARY KEY 
  ,gas_station_id     INTEGER  NOT NULL REFERENCES gas_stations(id)
  ,rating             NUMERIC(2,1)
  ,user_ratings_total INTEGER 
  ,comment            VARCHAR(250)
  ,user_id            VARCHAR(30)
);

ALTER TABLE reviews
ADD CONSTRAINT fk_gas_station
FOREIGN KEY (gas_station_id)
REFERENCES gas_stations(id);
=======
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
>>>>>>> 9ffa827 (added google seed)
