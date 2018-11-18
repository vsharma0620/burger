CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers 
(
    id int(10) AUTO_INCREMENT NOT NULL,
    burger_name varchar(100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
