// Task 8 - Best Practices
// Create a document outlining best practices for variable declaration in modern JavaScript.
// Include guidelines on when to use let, var, or const, taking into consideration block scoping,
// hoisting, and the immutability of constants. Provide code examples to illustrate each best practice.

// Choosing the right declaration keyword (let, var, or const) impacts code readability, maintainability, and performance.

// Use const by default, why ?
// we have defined the maximum number of users which are allowed, this cannot be modified or reassigned.
const MAX_USERS = 1000;
console.log(MAX_USERS);

// When we can use const ?
// For values that should never change, such as configuration settings, API keys, or fixed constants.

// Use Let when reassignment is needed
let count = 0;
count += 1;
console.log(count);

// let allows reassignment but is block-scoped, preventing accidental modifications outside its own scopes.

// Avoid using Var
// var is function-scoped, leading to potential variable leaks.
// var is hoisted but initialized as undefined, causing unpredictable behavior.
console.log(a); //Undefined (Hoisting issue)
var a = 10;
console.log(a);

// var is hoisted but initialized as undefined.
// let and const are hoisted but NOT initialized (TDZ applies).

console.log(a); // Undefined (var is hoisted)
var a = 5;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
