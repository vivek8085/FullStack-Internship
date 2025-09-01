//Poly
class Car {
  drive() {
    return "Car is driving";
  }
}

class SportsCar extends Car {
  drive() {
    return "SportsCar is driving fast";
  }
}

class Truck extends Car {
  drive() {
    return "Truck is carrying load";
  }
}

let vehicles = [new Car(), new SportsCar(), new Truck()];
vehicles.forEach(v => console.log(v.drive()));
