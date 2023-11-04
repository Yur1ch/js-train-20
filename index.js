/*
 * Функція конструктор: Vehicle
 * Властивості:
 * --------------------------------------
 * | Аргументи  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 */

function Vehicle(brand, model, year, mileage) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
}

Vehicle.prototype.toString = function () {
  return this.brand + " " + this.model + " " + this.year;
};

Vehicle.prototype.valueOf = function () {
  return this.mileage;
};

/*
 * Функція конструктор: Car
 * Властивості:
 * ----------------
 * | Властивість  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 * | fuelType     |
 * | speed        |
 */

function Car(brand, model, year, mileage, fuelType, speed) {
  Vehicle.call(this, brand, model, year, mileage);
  this.fuelType = fuelType;
  this.speed = speed;
}

Car.prototype.toString = function () {
  return (
    this.brand + " " + this.model + " " + this.year + " - " + this.fuelType
  );
};

Car.prototype.accelerate = function (speedIncrease) {
  this.speed += speedIncrease;
  console.log(
    `Автомобіль ${this.brand} ${this.model} прискорився до швидкості ${this.speed} км/год`
  );
};

Car.prototype.brake = function (speedDecrease) {
  this.speed -= speedDecrease;
  console.log(
    `Автомобіль ${this.brand} ${this.model} зменшив до швидкості ${this.speed} км/год`
  );
};

var myCar = new Car("Audi", "A6", 2018, 30000, "Petrol", 0);

console.log(myCar.toString());
console.log(myCar.valueOf());

myCar.accelerate(50);
myCar.brake(20);

/*
 * Функція конструктор Truck
 * Властивості:
 * --------------------
 * | Властивість      |
 * |------------------|
 * | brand            |
 * | model            |
 * | year             |
 * | mileage          |
 * | color            |
 * | engineType       |
 * | towingCapacity   |
 * | fuelType         |
 * | transmissionType |
 * | doors            |
 * | weight           |
 */

function Truck(
  brand,
  model,
  year,
  mileage,
  color,
  engineType,
  towingCapacity,
  fuelType,
  transmissionType,
  doors,
  weight
) {
  Vehicle.call(this, brand, model, year, mileage);
  this.color = color;
  this.engineType = engineType;
  this.towingCapacity = towingCapacity;
  this.fuelType = fuelType;
  this.transmissionType = transmissionType;
  this.doors = doors;
  this.weight = weight;
}

Truck.prototype.specific = function (load) {
  if (load > this.towingCapacity) {
    console.log("Навантаження занадто важке для буксирування");
  } else {
    console.log("Тягнення навантаження...");
  }
};

var myTruck = new Truck(
  "Toyota",
  "Tundra",
  2019,
  20000,
  "Red",
  "V8",
  10000,
  "Gasoline",
  "Automatic",
  4,
  5600
);

myTruck.specific(9000);
myTruck.specific(12000);

Car.prototype.drive = function (kilometers) {
  console.log(
    `Подорожуємо ${kilometers} кілометрів у ${this.brand} ${this.model}.`
  );
};

var carDrive = myCar.drive.bind(myCar);
carDrive(100);

/*
 * Функція конструктор: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість   |
 * |---------------|
 * | brand         |
 * | model         |
 * | year          |
 * | mileage       |
 * | batteryCapacity|
 */

function ElectricCar(brand, model, year, mileage, batteryCapacity) {
  if (!(this instanceof ElectricCar)) {
    throw new Error("Конструктор має бути викликаний з 'new'");
  }
  Car.call(this, brand, model, year, mileage, "Electric", 0);
  this.batteryCapacity = batteryCapacity;
}

ElectricCar.prototype.toString = function () {
  return (
    this.brand +
    " " +
    this.model +
    " " +
    this.year +
    " - Батарея: " +
    this.batteryCapacity +
    " kWh"
  );
};

var tesla = new ElectricCar("Tesla", "Model S", 2020, 10000, 100);

console.log(tesla.toString());

