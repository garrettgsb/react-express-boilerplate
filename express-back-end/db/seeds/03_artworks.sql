-- CREATE TABLE artworks (
--   id SERIAL PRIMARY KEY NOT NULL,
--   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   name VARCHAR(255) NOT NULL,
--   link VARCHAR(255) NOT NULL,
--   descrip VARCHAR(255) NOT NULL,
--   for_sale BOOLEAN NOT NULL,
--   price INTEGER DEFAULT NULL
-- );


INSERT INTO artworks 
(author_id, title, link, descrip, for_sale, price) 
VALUES
(1, 'Adams Jungle Rails Marketplace', 'https://github.com/AdamHHart/Jungle_Rails', 'description a', true, 1000),
(1, 'splat', 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fd5798ef4-f691-4873-8d55-89c76f5feac2.png?fit=scale-down&source=next&width=700', 'description b', false, 1000),
(1, 'Adams_Resume', 'http://www.adamhart.ca/', 'description c', false, 0);

-- INSERT INTO artworks 
-- (author_id, title)
-- VALUES 
-- (1, 'sample');