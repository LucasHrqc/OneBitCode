class Vehicle {
  move() {
    console.log("The vehicle is movnig.");
  }
}

class Car extends Vehicle {
  move() {
    console.log("The car is moving.");
  }
}

class Ship extends Vehicle {
  move() {
    console.log("The ship is moving.");
  }
}

class Aircraft extends Vehicle {
  move(speed) {
    console.log(`The aircraft is moving at ${speed} km/h`);
  }
}

const pampa = new Car();
const blackPearl = new Ship();
const epoch = new Aircraft();

pampa.move();
blackPearl.move();
epoch.move(50);
