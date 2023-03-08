CREATE TABLE `Wilder` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(120) NOT NULL,
  `email` varchar(120) NOT NULL
);

INSERT INTO `Wilder` (name, email)
VALUES ("John Doe", "johndoe@gmail.com"),
("Jane Doe", "janedoe@gmail.com");

SELECT * FROM Wilder;