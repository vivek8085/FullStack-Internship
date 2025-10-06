CREATE DATABASE IF NOT EXISTS DemoFunctions;
USE DemoFunctions;

DROP TABLE IF EXISTS Numbers;
CREATE TABLE Numbers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  value DECIMAL(10,4)
);

INSERT INTO Numbers (value) VALUES (1.2345),(2.7183),(3.1415),(4.9999),(5.0001),(10.4999);

SELECT id, value, FLOOR(value) AS floored, CEIL(value) AS ceiled FROM Numbers;
SELECT id, value, ROUND(value,2) AS rounded FROM Numbers;

DROP TABLE IF EXISTS Employees;
CREATE TABLE Employees (
  emp_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  salary DECIMAL(10,2),
  hire_date DATE
);

INSERT INTO Employees (name, salary, hire_date) VALUES
  ('Asha', 52345.75, '2020-05-01'),
  ('Rahul', 70000.00, '2019-03-15'),
  ('Maya', 61000.50, '2021-07-21');

SELECT name, salary, FLOOR(salary/1000) AS salary_in_thousands_floor, CEIL(salary/1000) AS salary_in_thousands_ceil FROM Employees;
SELECT name, CONCAT(UPPER(LEFT(name,1)),LOWER(SUBSTRING(name,2))) AS proper_name FROM Employees;
SELECT name, YEAR(hire_date) AS hire_year, DATEDIFF(CURDATE(), hire_date) AS days_with_company FROM Employees;

SELECT COUNT(*) AS total_employees, AVG(salary) AS avg_salary, SUM(salary) AS sum_salary, MAX(salary) AS max_salary, MIN(salary) AS min_salary FROM Employees;

DELIMITER $$
CREATE FUNCTION get_bonus(empSalary DECIMAL(10,2)) RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
  DECLARE bonus DECIMAL(10,2);
  IF empSalary < 60000 THEN
    SET bonus = empSalary * 0.05;
  ELSE
    SET bonus = empSalary * 0.1;
  END IF;
  RETURN ROUND(bonus,2);
END$$
DELIMITER ;

SELECT name, salary, get_bonus(salary) AS bonus FROM Employees;

DROP FUNCTION IF EXISTS round_down_to_hundred;
DELIMITER $$
CREATE FUNCTION round_down_to_hundred(x DECIMAL(10,2)) RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
  RETURN FLOOR(x/100)*100;
END$$
DELIMITER ;

SELECT salary, round_down_to_hundred(salary) AS rounded_down FROM Employees;

DROP PROCEDURE IF EXISTS increase_salary_by_percent;
DELIMITER $$
CREATE PROCEDURE increase_salary_by_percent(p_percent DECIMAL(5,2))
BEGIN
  UPDATE Employees SET salary = salary * (1 + p_percent/100);
END$$
DELIMITER ;

CALL increase_salary_by_percent(5);
SELECT name, salary FROM Employees;

DROP PROCEDURE IF EXISTS increase_salary_by_percent;
DROP FUNCTION IF EXISTS get_bonus;
DROP FUNCTION IF EXISTS round_down_to_hundred;
