// Task 7 - Let vs Var
// Develop a program that highlights the differences in scoping between let and var.
// Create a block-scoped variable using let and a function-scoped variable using var.
// Attempt to access these variables outside their respective scopes and explain the results in the comments.

// function getName() {
//   if (true) {
//     var firstName = "Harsh";
//     console.log(
//       `"var = ${firstName}" is declared inside if block and can be accessible here.`
//     );
//   }
//   console.log(
//     `"var = ${firstName}" is declared inside if block and can be accessed outside the if block.`
//   );
// }
// getName();

// ReferenceError: firstName is not defined
// console.log(
//   `var = ${firstName} is declared inside if block and cannot  be accessible outside the function scope.`
// );

function varScoping() {
  var x = 1;

  if (true) {
    var x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 2
}

function letScoping() {
  let x = 1;

  if (true) {
    let x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 1
}

varScoping();
letScoping();

var x = 10;
var x = 20; // Allowed (var allows redeclaration)
console.log("\nRedeclaring `var`: x =", x);

let y = 30;
// let y = 40; //Error: Cannot redeclare block-scoped variable
console.log("Redeclaring `let` would cause an error!");
