// Task 7 - Callback practical
// Create a function that takes an array and a callback function specifying the operation
// to be performed on each element of the array. The function should return a new modified array.
// (Don’t use map)

function incrementArr(arr, callback) {
  // declaring empty array
  let newArr = [];
  // looping through array, pushing the new array elements using callback function.
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

// callback function to increment the elements
function increment(num) {
  return num + 1;
}

let arr = [1, 2, 3, 4];
let result = incrementArr(arr, increment);
console.log("Incremented Array: ", result);
