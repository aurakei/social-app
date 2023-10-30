CREATE DATABASE socialdata;

CREATE TABLE users(
    user_id SERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR (255),
    last_name VARCHAR (255),
    user_name VARCHAR (255),
    email VARCHAR (255),
    password VARCHAR (255),
    bio VARCHAR (255),
    location VARCHAR (255),
    join_date TIME,
    date_of_birth DATE,
);

CREATE TABLE posts_table(
 post_id SERIAL NOT NULL PRIMARY KEY,
 user_id INT,
 content VARCHAR (255),
 timestamp TIME,
 likes_count INT,
 comments_count,
 comments_count INT,
 shares_count INT,);

CREATE TABLE comments_table(
 comment_id SERIAL NOT NULL PRIMARY KEY,
 post_id INT,
 user_id INT,
 comment_text VARCHAR (255),
 timestamp TIME);

CREATE TABLE likes_table(
     like_id SERIAL NOT NULL PRIMARY KEY,
     post_id INT,
     user_id INT);

CREATE TABLE follow_table(
 connection_id SERIAL NOT NULL PRIMARY KEY,
 follower_id INT,
 following_id INT);

CREATE TABLE chat_table(
 chat_id SERIAL NOT NULL PRIMARY KEY,
 user_id_1 INT,
 user_id_2 INT,
 message_text VARCHAR (255),
 timestamp TIME);