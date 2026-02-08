// Vehicle constructor
function Vehicle(brand, year) {
  this.brand = brand;
  this.year = year;
}

Vehicle.prototype.start = function() {
  console.log(this.brand + " started.");
};

// Car constructor (inherits from Vehicle)
function Car(brand, year, doors) {
  // მშობელი constructor-ის გამოძახება
  Vehicle.call(this, brand, year);
  this.doors = doors;
}

// Inheritance დაყენება
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// დამატებითი მეთოდი honk
Car.prototype.honk = function() {
  console.log(this.brand + " says: Beep beep!");
};

// ტესტი
const myCar = new Car("Toyota", 2020, 4);
myCar.start(); // Toyota started.
myCar.honk();  // Toyota says: Beep beep!
