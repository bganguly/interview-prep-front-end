// demo class using private variables

const Car = class {
  #color;
  constructor(wheels, doors, weight, color) {
    this.wheels = wheels;
    this.doors = doors;
    this.weight = weight;
    this.#color = color;
  }

  getColor() {
    return this.#color;
  }

}

const IceCar = class extends Car {
  constructor(wheels, doors, weight, color,numberOfCylinders) {
    super(wheels, doors, weight, color)
    this.numberOfCylinders = numberOfCylinders;
  }
}

const ElectricCar = class extends Car {
  constructor(wheels, doors, weight, color,wattage) {
    super(wheels, doors, weight, color)
    this.wattage = wattage;
  }
}

const carObj = new Car(4,4, 1000, 'red')
// returns undefined
console.log(carObj.color)
// returns red
console.log(carObj.getColor())


