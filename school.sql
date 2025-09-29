CREATE DATABASE IF NOT EXISTS School;
USE School;

DROP TABLE IF EXISTS Student;
CREATE TABLE Student (
  student_id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  date_of_birth DATE
);

INSERT INTO Student (first_name, last_name, email, date_of_birth)
VALUES
  ('Asha', 'Kumar', 'asha.kumar@example.com', '2004-05-12'),
  ('Rahul', 'Sharma', 'rahul.sharma@example.com', '2003-11-02'),
  ('Maya', 'Patel', 'maya.patel@example.com', '2005-01-20');

SELECT * FROM Student;

UPDATE Student
SET email = 'rahul.updated@example.com'
WHERE email = 'rahul.sharma@example.com';

DELETE FROM Student WHERE student_id = 3;

START TRANSACTION;
INSERT INTO Student (first_name, last_name, email, date_of_birth)
VALUES ('Isha', 'Verma', 'isha.verma@example.com', '2004-07-09'),
       ('Arjun', 'Reddy', 'arjun.reddy@example.com', '2002-03-15');
COMMIT;
