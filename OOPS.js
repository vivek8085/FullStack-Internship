class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log(`${this.brand} ${this.model}'s engine started.`);
    }
    stopEngine() {
        console.log(`${this.brand} ${this.model}'s engine stopped.`);
    }
}

class Engine {
    #temperature = 0;
    turnOn() {
        this.#temperature = 90;
        console.log("Engine is running...");
    }
    turnOff() {
        this.#temperature = 0;
        console.log("Engine is off.");
    }
    getTemperature() {
        return this.#temperature;
    }
}

class ElectricCar extends Car {
    constructor(brand, model, batteryCapacity) {
        super(brand, model);
        this.batteryCapacity = batteryCapacity;
    }
    chargeBattery() {
        console.log(`${this.brand} ${this.model} is charging. Battery: ${this.batteryCapacity} kWh`);
    }
}

class SportsCar extends Car {
    startEngine() {
        console.log(`${this.brand} ${this.model} roars to life with a powerful engine!`);
    }
}

class FamilyCar extends Car {
    startEngine() {
        console.log(`${this.brand} ${this.model} starts smoothly for a comfortable ride.`);
    }
}

const car1 = new Car("Toyota", "Corolla");
car1.startEngine();
car1.stopEngine();

const engine = new Engine();
engine.turnOn();
console.log("Engine Temperature:", engine.getTemperature());
engine.turnOff();

const tesla = new ElectricCar("Tesla", "Model 3", 75);
tesla.startEngine();
tesla.chargeBattery();

const ferrari = new SportsCar("Ferrari", "488");
ferrari.startEngine();

const innova = new FamilyCar("Toyota", "Innova");
innova.startEngine();
