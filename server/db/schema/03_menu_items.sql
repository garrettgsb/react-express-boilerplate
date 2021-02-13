-- Drop and recreate Menu_items table

DROP TABLE IF EXISTS menu_items
CASCADE;

CREATE TABLE menu_items
(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  price FLOAT NOT NULL,
  image TEXT,
  category VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  store_id INTEGER REFERENCES stores(id) ON DELETE CASCADE
);



