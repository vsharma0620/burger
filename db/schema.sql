DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers 
(
    id int(10) AUTO_INCREMENT NOT NULL,
    burger_name varchar(100) NOT NULL,
    devour BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
