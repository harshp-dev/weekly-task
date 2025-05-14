// # Task 11 - Create magic function

// Create function that in which you have to pass number in diff function call and when you want
// result at the end you have to call function with no argument.
// Ex. magicFunction(2)(3)(4)(5)()
// output: 14

// function magicFunction(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return a + b + c + d;
//       };
//     };
//   };
// }
// console.log(magicFunction(2)(3)(4)(5));

function magicFunction(num) {
  let sum = num; // Store the initial number

  function inner(nextNum) {
    if (nextNum === undefined) {
      return sum; // If no argument is passed, return the sum
    }
    sum += nextNum; // Accumulate sum
    return inner; // Return the function itself to allow chaining
  }

  return inner;
}

console.log(magicFunction(2)(3)(4)(5)());
console.log(magicFunction(10)(20)(30)());
console.log(magicFunction(1)(1)(1)(1)(1)());
