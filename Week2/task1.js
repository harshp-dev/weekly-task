//  Task 1 - Function Currying
// Create example of function currying using closure and bind Ex. multiply by 2 from multiplication function

// currying means transforming a function with multiple arguments into a series of functions, each taking a single argument.

// 1. Using Closure
// function multiply(x) {
//     // Returns a function that multiplies the captured x with its argument y
//     return function(y) {
//       return x * y;
//     };
//   }

//   // Create a new function that multiplies any number by 2
//   const multiplyByTwo = multiply(2);

//   console.log(multiplyByTwo(5));

// 2. Using Bind
// function multiply(x, y) {
//   return x * y;
// }

// // Use bind to preset the first argument (x) to 2
// const multiplyBy2 = multiply.bind(null, 2);

// console.log(multiplyBy2(5)); // Outputs: 10
