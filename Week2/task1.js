// Task 1 - Function Currying
// Create example of function currying using closure and bind Ex. multiply by 2 from multiplication function
// When a function takes series of function
// Simple Function
// Regular function taking two arguments
// function add(a, b) {
//     return a + b;
//   }

// Curried version of the same function
// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// const addUp = add(3);
// console.log(addUp(5));

// 1. Using Closure
// function multiply(a) {
//   return function (b) {
//     return a * b;
//   };
// }

// const result = multiply(3);
// console.log(result(2));

// 2. Using Bind
// function multiply(x, y) {
//   return x * y;
// }

// const multiplyWithTwo = multiply.bind(null, 2);
// console.log(multiplyWithTwo(2));
