// Task 6 - Constants
// Write a script that utilizes const for declaring constants.
// Attempt to reassign values to these constants and observe the behavior.
// Include comments explaining the concept of immutability with const and when it is appropriate to use it.

// Declaring with const.
// const uniqueId = 12345;
// console.log("Your uniqueId is: ", uniqueId);

// uniqueId = 239507;
// console.log(uniqueId); // TypeError: Assignment to constant variable, because we cannot reassign the const variables

// Const with objects
// modifying the const variables of objects are allowed
// const person = {
//   name: "Harsh",
//   age: 25,
// };
// console.log("Before changes", person);
// person.age = 30;
// console.log("After changing the age", person);

// // we cannot reassign the whole object

// person = {
//   name: "Aryan",
//   age: 20,
// };
// // TypeError: Assignment to constant variable, because we cannot reassign whole object
// console.log("After trying to reassign", person);

// const with arrays, we can push pop elements but we cannot reassign
// const numbers = [1, 2, 3, 4];
// console.log(`Before pushing: ${numbers}`);
// numbers.push(5);
// console.log(`After pushing: ${numbers}`);

// TypeError: Assignment to constant variable, cannot reassign
// numbers = [1, 2];
// console.log(numbers);

// Const cannot be reassigned, in case of objects we can modify the properties but we cannot reassign.
