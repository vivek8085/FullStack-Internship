CREATE DATABASE IF NOT EXISTS Company;
USE Company;

DROP TABLE IF EXISTS Employee;
CREATE TABLE Employee (
  emp_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  salary INT,
  department VARCHAR(50),
  hire_date DATE
);

INSERT INTO Employee (name, email, salary, department, hire_date) VALUES
  ('Asha Kumar', 'asha.kumar@company.com', 50000, 'HR', '2022-01-10'),
  ('Rahul Sharma', 'rahul.sharma@company.com', 70000, 'IT', '2021-05-15'),
  ('Maya Patel', 'maya.patel@company.com', 60000, 'Finance', '2023-03-20'),
  ('Arjun Reddy', 'arjun.reddy@company.com', 80000, 'IT', '2020-11-01');

SELECT * FROM Employee;

SELECT name, salary FROM Employee WHERE salary BETWEEN 55000 AND 80000;

SELECT name, department FROM Employee WHERE department IN ('IT', 'HR');

SELECT name, hire_date, salary FROM Employee WHERE hire_date > '2021-01-01' ORDER BY salary DESC;

SELECT * FROM Employee WHERE name LIKE 'A%';

UPDATE Employee SET salary = salary + 5000 WHERE department = 'IT';

DELETE FROM Employee WHERE salary < 60000;

SELECT * FROM Employee WHERE (department = 'IT' OR department = 'Finance') AND salary > 60000;
SELECT * FROM Employee WHERE NOT department = 'HR';

SELECT * FROM Employee LIMIT 2;

SELECT * FROM Employee WHERE email LIKE '%@company.com';

SELECT * FROM Employee WHERE email IS NOT NULL;

SELECT * FROM Employee WHERE email IS NULL;

SELECT * FROM Employee WHERE NOT (department = 'HR');

SELECT * FROM Employee WHERE salary > 60000 AND NOT department = 'HR';
INSERT INTO Employee (name, email, salary, department, hire_date) VALUES ('Test_User', 'test_user@company.com', 55000, 'QA', '2024-01-01');

SELECT * FROM Employee WHERE name LIKE 'T_st_User';

SELECT * FROM Employee WHERE email LIKE '%\_%' ESCAPE '\\';
-- Examples: LIKE, NOT NULL, ISNULL, NOT

SELECT * FROM Employee WHERE email LIKE '%@company.com';

SELECT * FROM Employee WHERE email IS NOT NULL;

SELECT * FROM Employee WHERE email IS NULL;

SELECT * FROM Employee WHERE NOT (department = 'HR');

SELECT * FROM Employee WHERE salary > 60000 AND NOT department = 'HR';
