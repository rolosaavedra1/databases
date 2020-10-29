DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;
USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id VARCHAR(200) NOT NULL,
  createdAt date,
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id VARCHAR(200) NOT NULL,
  createdAt date,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id int(16) AUTO_INCREMENT,
  text VARCHAR(200) NOT NULL,
  userId VARCHAR(200),
  roomId VARCHAR(200),
  createdAt date,
  PRIMARY KEY (id),
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (roomId) REFERENCES rooms(id)
);



/* `FOREIGN KEY(<table-name>) REFERENCES <table-name>(<column-name>)`*/

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

