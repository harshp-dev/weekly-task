// Task 14 - basic “this”
// Create an object called person with properties name and age. Add a method named introduce to
// the object, which logs a message using the "this" keyword to reference the name and age properties.
// Call the introduce method to introduce the person.

let person = {
  name: "Harsh",
  age: 25,
  greet: function () {
    console.log(`Name: ${this.name} and Age: ${this.age}`);
  },
};

person.greet();
