DROP DATABASE IF EXISTS moviebuddy_db;
CREATE DATABASE moviebuddy_db;
USE moviebuddy_db;

CREATE TABLE movies
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(101) NOT NULL,
    rating varchar(11) NULL,
	released varchar(30) NULL,
    plot varchar(255) NULL,
	poster varchar(255) NULL,
	deleted BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);