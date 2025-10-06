USE company;

SELECT UPPER(emp_name) AS UpperName FROM employees;
SELECT LOWER(emp_name) AS LowerName FROM employees;
SELECT CONCAT(first_name, ' ', last_name) AS FullName FROM employees;
SELECT SUBSTRING(emp_name, 1, 5) AS ShortName FROM employees;

SELECT ABS(salary - 50000) AS SalaryDifference FROM salaries;
SELECT ROUND(salary, -3) AS RoundedSalary FROM salaries;
SELECT CEIL(salary) AS CeilSalary FROM salaries;
SELECT FLOOR(salary) AS FloorSalary FROM salaries;

SELECT NOW() AS CurrentDateTime;
SELECT CURDATE() AS CurrentDate;
SELECT emp_name, DATEDIFF(CURDATE(), hire_date) AS DaysWorked FROM employees;
SELECT emp_name, DATE_ADD(hire_date, INTERVAL 1 YEAR) AS NextAnniversary FROM employees;

SELECT COUNT(*) AS TotalEmployees FROM employees;
SELECT SUM(salary) AS TotalSalary FROM salaries;
SELECT AVG(salary) AS AvgSalary FROM salaries;
SELECT MIN(salary) AS MinSalary FROM salaries;
SELECT MAX(salary) AS MaxSalary FROM salaries;


CREATE DATABASE company;
USE company;

CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    emp_name VARCHAR(100),
    hire_date DATE
);

CREATE TABLE salaries (
    salary_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_id INT,
    salary DECIMAL(10,2),
    FOREIGN KEY (emp_id) REFERENCES employees(emp_id)
);

INSERT INTO employees (first_name, last_name, emp_name, hire_date) VALUES
('John', 'Doe', 'John Doe', '2018-06-12'),
('Alice', 'Smith', 'Alice Smith', '2020-01-15'),
('Bob', 'Johnson', 'Bob Johnson', '2019-09-23'),
('Eve', 'Brown', 'Eve Brown', '2021-05-30'),
('Charlie', 'Miller', 'Charlie Miller', '2017-11-10');

INSERT INTO salaries (emp_id, salary) VALUES
(1, 55000),
(2, 47000),
(3, 62000),
(4, 38000),
(5, 72000);
