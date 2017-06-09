//code lab car class
'use strict';

class Car {
  constructor (carName, carModel, carType) {
    if (carName) {
      this.name = carName;
      this.model = carModel;
    }
    else {
      this.name = "General";
      this.model = "GM";
    }

    this.type = carType;

    if (carName == 'Koenigsegg' || carName == 'Porshe') {
      this.numOfDoors = 2;
    }
    else {
      this.numOfDoors = 4;
    }

    if (carType == 'trailer') {
      this.numOfWheels = 8;
      this.isSaloon = false;
    }
    else {
      this.numOfWheels = 4;
      this.isSaloon = true;
    }

    this.speed = '0 km/h';
  }

  drive(n)  {
    if (n == 5) {
      return (this.speed = 250 + ' km/h');
    }
    else if (n == 7) {
      return (this.speed = 77 + ' km/h');
    }
  }
}

module.exports = {Car};
