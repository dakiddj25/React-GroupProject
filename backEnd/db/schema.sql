DROP DATABASE IF EXISTS bytes_db;
CREATE DATABASE bytes_db;

\c bytes_db;

-- //users, posts, hashtag table

DROP TABLE IF EXISTS hashtag;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users; 

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstName text,
    lastName text, 
    userName text,
    password text, 
    email text,
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

INSERT INTO users(id, firstName, lastName, userName, password,  email, user_pic)
VALUES(1, 'Rafid', 'Hossain', 'rafidhos', 'pursuit','rafidhos9@pursuit.org', 'no userpic');

INSERT INTO posts(id, user_id, pictures, captions)
VALUES(1, 1, 'cape may picture', 'what a great time here');

INSERT INTO hashtags(id, post_id, hashtag)
VALUES(1, 1, '#summer19');
