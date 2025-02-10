// Task 3 - Nested loops with break
// Develop a JavaScript script that utilizes nested loops (either for or while).
// The outer loop should iterate from 1 to 3, and the inner loop from 1 to 5.
// Use break to exit the inner loop when the current iteration count of the inner loop
// is equal to the outer loop's current iteration count. Print the values of both loop
// variables to demonstrate the breaking condition.

// Outer loop which iterates from 1 to 3
for (let i = 1; i <= 3; i++) {
  console.log(`outer loop ${i}`);
  // Inner loop which iterated from 1 to 5
  for (let j = 1; j <= 5; j++) {
    // condition to break when outer loop and inner loop comes at same index.s
    if (j == i) {
      console.log(`inner loop is at ${j}, breaking`);
      break;
    }
    console.log(`outer loop is at ${i} and inner loop is at ${j}`);
  }
}
