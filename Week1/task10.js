// Task 10 - Array and Array methods
// Develop a script that uses an array to store the days of the week.
// Use array methods such as push, pop, shift, or unshift to modify the array.
// Print the array after each modification. Additionally, use the indexOf method to
// find the index of a specific day.

let daysOfWeek = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

console.log(`Initial array: ${daysOfWeek}`);

// pop
daysOfWeek.pop();
console.log(`after popping the week day ${daysOfWeek}`);

// push
daysOfWeek.push("sunday");
console.log(`after pushing the week day ${daysOfWeek}`);

// Adding sunday back to the beginning using unshift()
daysOfWeek.pop();
console.log(`after popping the week day ${daysOfWeek}`);
daysOfWeek.unshift("sunday");
console.log(`after performing unshift operation: ${daysOfWeek}`);

// Removing the sunday from the start
daysOfWeek.shift();
console.log("After shift (removing Sunday again):", daysOfWeek);

// finding the index of wednesday
let index = daysOfWeek.indexOf("Wednesday");
console.log(`Index of Wednesday: ${index}`);

// check is saturday is present in the array or not
let isSaturdayPresent = daysOfWeek.indexOf("saturday") !== -1;
console.log("Is Saturday in the array?", isSaturdayPresent);
