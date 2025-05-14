// Task 4 - Constructor function and this
// Create Car constructor function that takes parameters such as name, brand, and year.
// Include a method displayInfo that prints the car details. Create an instance using the
// constructor function and call the displayInfo method.

function Car(name, brand, year) {
  (this.name = name),
    (this.brand = brand),
    (this.year = year),
    (this.displayInfo = function () {
      console.log(
        `Name of car is ${this.name} and its brand is ${this.brand} and it is of ${this.year} year.`
      );
    });
}

const displayCar = new Car("Glanza", "Toyota", 2020);
displayCar.displayInfo();
