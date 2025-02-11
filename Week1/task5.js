// Task 5 - Hoisting
// Create a program that demonstrates variable hoisting in JavaScript.
// Declare variables using both var and let within functions and blocks,
// and then attempt to access these variables before and after their declarations.
// Explain the behavior observed in the comments.

// --------- var, let, const, basic hosting ---------
// var can be hoisted
console.log(`accessing the var a before declaring: `, a);
var a = 10;
console.log(`accessing the var a after  declaring: `, a);

// let cannot be hoisted
console.log(`accessing the let a before declaring: `, b);
let b = 20;

// const cannot be hoisted
console.log(`accessing the const a before declaring: `, c);
const c = 30;

//---------- hoisting inside functions -----------

function testHoisting() {
  console.log("\nInside function before declaration:", functionVar); // undefined
  var functionVar = "I am inside a function!";
  console.log("Inside function after declaration:", functionVar); // I am inside a function!

  try {
    console.log("Inside function before declaration:", functionLet); // ReferenceError
  } catch (error) {
    console.log("Error:", error);
  }

  let functionLet = "Let inside function!";
  console.log("Inside function after declaration:", functionLet); // Let inside function!
}
testHoisting();

// ----------Hoisting Inside Blocks -----------

{
  console.log("\nInside block with var before declaration:", blockVar); // Undefined
  var blockVar = "Var inside block!";
  console.log("Inside block with var after declaration:", blockVar); // "Var inside block!"

  try {
    console.log("Inside block with let before declaration:", blockLet); // reference error
  } catch (error) {
    console.log("Error:", error);
  }

  let blockLet = "Let inside block!";
  console.log("Inside block with let after declaration:", blockLet); // "Let inside block!"
}

// Checking var outside block
console.log("Accessing var outside block:", blockVar); // "Var inside block!"

// Checking let outside block
try {
  console.log("Accessing let outside block:", blockLet); // reference error
} catch (error) {
  console.log("Error:", error);
}
