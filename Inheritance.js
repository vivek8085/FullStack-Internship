class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  drive() {
    console.log(`${this.brand} ${this.model} is driving`);
  }
}

class ElectricCar extends Car {
  constructor(brand, model, battery) {
    super(brand, model);
    this.battery = battery;
  }

  charge() {
    console.log(`${this.brand} ${this.model} is charging with ${this.battery} kWh battery`);
  }
}

const car1 = new Car("Toyota", "Corolla");
car1.drive();

const car2 = new ElectricCar("Tesla", "Model 3", 75);
car2.drive();
car2.charge();
