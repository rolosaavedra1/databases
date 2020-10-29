CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id VARCHAR(200) NOT NULL,
  created_at date,
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id VARCHAR(200) NOT NULL,
  created_at date,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id int(16) DEFAULT 0 NOT NULL AUTO_INCREMENT,
  text VARCHAR(200) NOT NULL,
  user_id VARCHAR(200),
  room_id VARCHAR(200),
  created_at date,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);



/* `FOREIGN KEY(<table-name>) REFERENCES <table-name>(<column-name>)`*/

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

