// Task 11 - Map for transformation
// Write a JavaScript program that uses the map function to transform an array of numbers.
// Square each element in the array and create a new array with the squared values.
// Print both the original and transformed arrays.

const arr = [1, 2, 3, 4, 5];

console.log("Original Array:", arr);

// Step 2: Use the map function to square each number
const squaredNum = arr.map((num) => num * num);

console.log("Squared Array:", squaredNum);
