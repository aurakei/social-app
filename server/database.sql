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
