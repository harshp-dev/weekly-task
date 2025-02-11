// Task 9 - working with numbers and strings
// Create a program that declares variables with different
// data types: a number (age), a string (name), and a boolean (isStudent).
// Perform operations like concatenating the name with a greeting, converting the age to a string,
// and combining the boolean value with a string to form a sentence. Print the results.

const name = "Harsh";
const age = 25;
const isStudent = true;

// concatenating
const sayHello = "Hello, " + name;
console.log(sayHello);

// converting age to string
const ageToString = "Age: " + age.toString();
console.log(ageToString);
console.log(typeof ageToString);

const student = "Is " + name + " Student? " + isStudent;
console.log(student);

// we can use template Literals
console.log("------------------------------------");
console.log(`Hello ${name}`);
console.log(`Age: ${age}`);
console.log(`Is Student ?: ${isStudent}`);
