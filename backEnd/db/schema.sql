DROP DATABASE IF EXISTS bytes_db;
CREATE DATABASE bytes_db;

\c bytes_db;

-- //users, posts, hashtag table

DROP TABLE IF EXISTS hashtags;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users; 

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstName text NOT NULL,
    lastName text NOT NULL, 
    userName TEXT NOT NULL UNIQUE,
    password VARCHAR, 
    email VARCHAR,
    user_pic VARCHAR

);

CREATE TABLE posts(
id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(id),
pictures VARCHAR,
captions VARCHAR
);

CREATE TABLE hashtags(
id SERIAL PRIMARY KEY,
post_id INT REFERENCES posts(id),
hashtag VARCHAR
);

INSERT INTO users( firstName, lastName, userName, password,  email, user_pic)
VALUES( 'Rafid', 'Hossain', 'rafidhos', 'pursuit','rafidhos9@pursuit.org', 'https://pbs.twimg.com/profile_images/841015882797199361/Wigbpdj4_400x400.jpg'),
( 'Jay', 'Hossain', 'jones123', '1234','jones12@pursuit.org', 'https://cdn.newsapi.com.au/image/v1/8a4d4a44df4a7069781a6583461bcb1d'),
( 'Crystal', 'Hossain', 'Cry123', '1234','cry12@pursuit.org', 'https://pbs.twimg.com/profile_images/518458002341625856/Huesj-5A.jpeg'),
( 'Jovanni', 'Hossain', 'Jojo', '1234','jo12@pursuit.org', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJHfTMQ5TLY4Tv6lzArjZWZBJxrfZmfxNieXlORNb6oetSzo_X'),
( 'Ben', 'Hossain', 'benji', '1234','benny@pursuit.org', 'https://steamuserimages-a.akamaihd.net/ugc/494654052800262970/8F0E2FA5EB82B5D30E1C568B7524A9FECAC020A6/');


INSERT INTO posts(user_id, pictures, captions)
VALUES( 1, 'https://assets3.thrillist.com/v1/image/2791598/size/tl-full_width_tall_mobile.jpg', 'what a great time here'),
( 2, 'https://media-cdn.tripadvisor.com/media/photo-s/0f/7b/14/d4/great-food-and-great.jpg', 'Tasty'),
( 3, 'https://media-cdn.tripadvisor.com/media/photo-s/02/af/42/21/great-food.jpg', 'Im loving it'),
( 4, 'https://gadsdenmessenger.com/wp-content/uploads/sites/33/2017/12/lolas.jpg', 'YUmmm'),
( 5, 'https://media-cdn.tripadvisor.com/media/photo-s/09/a1/ba/57/restaurant-bakal.jpg', 'eating in my g5 plane');

INSERT INTO hashtags(post_id, hashtag)
VALUES( 1, '#summer19'),
( 2, '#nocorona'),
( 3, '#summertimefine'),
( 4, '#loveyourself'),
( 5, '#livelove');
