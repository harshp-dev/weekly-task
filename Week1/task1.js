// Task 1 - For loops with break and continue
// Write a JavaScript program that uses a for loop to iterate over an array of numbers.
// Within the loop, implement a condition to break out of the loop when a number greater than 5
// is encountered. Additionally, use continue to skip the iteration when the number is exactly 3.
// Print the elements before and after applying these control flow statements.

let arr = [1, 2, 3, 4, 5, 6];
console.log(`Array before implementation: ${arr}`);

console.log("After control flow: ");
for (let i = 0; i < arr.length; i++) {
  const num = arr[i];
  //   Condition when num equals to 3, it will skip that element and move to next.
  if (num == 3) {
    continue;
  }
  //   Condition when num hits greater than 5 it should break
  else if (num > 5) {
    break;
  }
  //   Printing the final result
  console.log(num);
}
