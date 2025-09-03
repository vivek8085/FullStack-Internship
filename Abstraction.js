// Abstract Class (base class)
class Employee {
  constructor(name) {
    if (new.target === Employee) {
      throw new Error("Cannot instantiate abstract class directly");
    }
    this.name = name;
  }

  // Abstract method (must be implemented by child classes)
  calculateSalary() {
    throw new Error("Method 'calculateSalary()' must be implemented");
  }
}

// Full-Time Employee class
class FullTimeEmployee extends Employee {
  constructor(name, monthlySalary) {
    super(name);
    this.monthlySalary = monthlySalary;
  }

  calculateSalary() {
    return this.monthlySalary;
  }
}

// Part-Time Employee class
class PartTimeEmployee extends Employee {
  constructor(name, hourlyRate, hoursWorked) {
    super(name);
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }

  calculateSalary() {
    return this.hourlyRate * this.hoursWorked;
  }
}

// Contract Employee class
class ContractEmployee extends Employee {
  constructor(name, projectRate) {
    super(name);
    this.projectRate = projectRate;
  }

  calculateSalary() {
    return this.projectRate;
  }
}

// Usage
const employees = [
  new FullTimeEmployee("Alice", 50000),
  new PartTimeEmployee("Bob", 500, 80),
  new ContractEmployee("Charlie", 30000)
];

employees.forEach(emp => {
  console.log(`${emp.name}'s Salary: ₹${emp.calculateSalary()}`);
});
