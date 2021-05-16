-- CREATE TABLE artworks (
--   id SERIAL PRIMARY KEY NOT NULL,
--   author_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   title VARCHAR(255) NOT NULL,
--   img_link VARCHAR(255) NOT NULL,
--   project_link VARCHAR(255) NOT NULL,
--   descrip VARCHAR(255) NOT NULL,
--   for_sale BOOLEAN NOT NULL,
--   price INTEGER DEFAULT NULL
-- );


INSERT INTO artworks 
(author_id, title, img_link, project_link, descrip, for_sale, price) 
VALUES
(1, 'Adams Jungle Rails Marketplace', 'https://github.com/AdamHHart/Jungle_Rails', 'https://github.com/AdamHHart/Jungle_Rails/blob/master/public/docs/admin_products.png?raw=true', 'description a', true, 1000),
(2, 'splat', 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fd5798ef4-f691-4873-8d55-89c76f5feac2.png?fit=scale-down&source=next&width=700', 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fd5798ef4-f691-4873-8d55-89c76f5feac2.png?fit=scale-down&source=next&width=700', 'description b', false, 1000),
(1, 'Adams_Resume', 'http://www.adamhart.ca/', 'https://c8.alamy.com/comp/AGJR8K/adam-hart-davis-freelance-photographer-writer-broadcaster-and-television-AGJR8K.jpg', 'description c', false, 0),
(2, 'Flowers', 'https://www.legacy.com/wp-content/uploads/2020/01/Sympathy-flowers-orange-1000-shutterstock_694680475.jpg', 'https://www.legacy.com/wp-content/uploads/2020/01/Sympathy-flowers-orange-1000-shutterstock_694680475.jpg', 'description flowers', false, 0),
(6, 'Photography', 'https://www.riseupsurf.com/wp-content/uploads/DSC03330.jpg', 'https://www.riseupsurf.com/wp-content/uploads/DSC03330.jpg', 'description surf', false, 0),
(1, 'Game', 'https://miro.medium.com/max/1002/1*Tlq8iZ4-jp0NB13fuNIMNg.png', 'https://miro.medium.com/max/1002/1*Tlq8iZ4-jp0NB13fuNIMNg.png', 'description game', false, 0),
(1, 'Woodwork', 'https://images-na.ssl-images-amazon.com/images/I/81vgrsO09eL.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81vgrsO09eL.jpg', 'description totem', true, 1000000),
(3, 'Photography', 'https://www.riseupsurf.com/wp-content/uploads/DSC03330.jpg', 'https://www.riseupsurf.com/wp-content/uploads/DSC03330.jpg', 'description surf', false, 0),
(4, 'Game', 'https://miro.medium.com/max/1002/1*Tlq8iZ4-jp0NB13fuNIMNg.png', 'https://miro.medium.com/max/1002/1*Tlq8iZ4-jp0NB13fuNIMNg.png', 'description game', false, 0),
(5, 'Woodwork', 'https://images-na.ssl-images-amazon.com/images/I/81vgrsO09eL.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81vgrsO09eL.jpg', 'description totem', true, 1000000);

-- INSERT INTO artworks 
-- (author_id, title)
-- VALUES 
-- (1, 'sample');;