// Task 4 - variable scope
// Write a JavaScript program with comments explaining the differences between let, var,
// and const in terms of variable declaration. Include examples that showcase the scope of
// each type of variable and any restrictions they might have.

// for (let i = 0; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 5000);
// }

// for (const i = 0; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 5000);
// }

// for (var i = 0; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 5000);
// }

// Declaration of var, let, and const
// var can be redeclared and can also assign again

// var a = 10;
// console.log(`original value of a: ${a}`);
// var a = 30;
// console.log(`redeclared value of a: ${a}`);
// a = 20;
// console.log(`newly assigned value of a: ${a}`);

// let can be redeclared
// let cannot be redeclared but can be reassigned

// let a = 10;
// console.log(`original value of a: ${a}`);
// let a = 30;
// console.log(`redeclared value of a: ${a}`);
// a = 20;
// console.log(`newly assigned value of a: ${a}`);

// const cannot be redeclared
// const cannot be reassigned

// const a = 10;
// console.log(`original value of a: ${a}`);
// const a = 30;
// console.log(`redeclared value of a: ${a}`);
// a = 20;
// console.log(`newly assigned value of a: ${a}`);

// Var is function scoped so it can be accessed in below case, but let and const are block scoped so they won't be able to access.
// function testFun() {
//   if (true) {
//     var a = 1;
//     let b = 2;
//     const c = 3;
//   }
//   console.log(`var can be accessed: ${a}`);
//   console.log(`let can not be accessed outside of function scope: ${b}`);
//   console.log(`const can not be accessed outside of function scope: ${c}`);
// }

// testFun();

// hoisting differences
// var can be hoisted
console.log(`accessing the var a before declaring: `, a);
var a = 10;

// let cannot be hoisted
console.log(`accessing the let a before declaring: `, b);
let b = 20;

// const cannot be hoisted
console.log(`accessing the const a before declaring: `, c);
const c = 30;
