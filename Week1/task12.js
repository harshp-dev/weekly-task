// Task 12 - Filter for selection
// Create a program that utilizes the filter function to extract even numbers
// from an array of integers. Print the original array and the filtered array containing
// only even numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => {
  if (num % 2 == 0) {
    return num;
  }
});

console.log(evenNumbers);
