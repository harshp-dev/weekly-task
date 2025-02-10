// Task 13 - Reduce for Aggregation
// Develop a script that employs the reduce function to find the sum of all elements in an array.
// Print the original array and the final sum.

const arr = [1, 2, 3, 4, 5];
const sumOfAllElements = arr.reduce((acc, current) => {
  acc = acc + current;
  return acc;
});

console.log(`sum of all elements present in the array is ${sumOfAllElements}`);
