//Ad-hoc
class Calculator {
  add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
      return String(a) + String(b); // works like string concatenation
    }
    return a + b; // works like number addition
  }
}

const calc = new Calculator();
console.log(calc.add(5, 10));     // 15
console.log(calc.add("Hello", " JS")); // "Hello JS"

//Subtype
class Vehicle {
  move() {
    console.log("Vehicle is moving");
  }
}

class Car extends Vehicle {
  move() {
    console.log("Car is driving");
  }
}

class Bike extends Vehicle {
  move() {
    console.log("Bike is riding");
  }
}

const vehicles = [new Car(), new Bike()];
vehicles.forEach(v => v.move());
// Car is driving
// Bike is riding


//Parametric
function identity(value) {
  return value;
}

console.log(identity(42));        // 42
console.log(identity("JavaScript")); // "JavaScript"
console.log(identity([1, 2, 3]));   // [1, 2, 3]


//Coercion Polymorphism (Type Conversion)
console.log(5 + "5"); // "55"  (number → string coercion)
console.log("10" * 2); // 20   (string → number coercion)
