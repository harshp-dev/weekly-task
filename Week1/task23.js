// Task 23 - Object constructor and prototype
// Create a constructor function called Person that takes name and age as parameters and assigns
// them as properties. Add a method greet to the prototype of the constructor,
// which logs a greeting message using the person's name. Instantiate two objects using
// the Person constructor and call the greet method on both.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Name is ${this.name} and Age is ${this.age}`);
};

const Person1 = new Person("Harsh", 25);
const Person2 = new Person("Aryan", 30);

Person1.greet();
Person2.greet();
