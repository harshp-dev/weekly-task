// Task 20 - shallow vs deep copy
// Create an object called originalPerson with properties name, age, and an array hobbies.
// Use both shallow copy and deep copy techniques to create a new object called shallowCopyPerson
// and deepCopyPerson. Modify the hobbies array in one of the copies and observe how it affects
// the original object. Log the properties of all three objects.
let originalPerson = {
  name: "Harsh",
  age: 25,
  hobbies: ["Reading Books", "Watching Sports", "Playing Games"],
};

let shallowCopyPerson = { ...originalPerson };
shallowCopyPerson.name = "Aryan";
console.log(`Original Name: ${originalPerson.name}`);
console.log(`Modified Name: ${shallowCopyPerson.name}`);

// An intersting behaviour I have observed is that when I am trying to assign whole new array to the copy, then ideally it should change the original object too, but it is not changing because when we assign whole new array it will start refrencing to another memory location insted of the original memory location. Due to this the original array remains unchanged
// shallowCopyPerson.hobbies = [
//   "Watching Movies",
//   "Having Coffee",
//   "Playing Cricket",
// ];

// This will change the original array too, because we are trying to change something which is referencing to same memory location
shallowCopyPerson.hobbies[0] = "Watching Movies";

console.log(`Original Hobbies: ${originalPerson.hobbies}`);
console.log(`Modified Hobbies: ${shallowCopyPerson.hobbies}`);

console.log(`Original Object`, originalPerson);
console.log(`Modified Object`, shallowCopyPerson);
console.log(`Original Object`, originalPerson);

let deepCopyPerson = structuredClone(originalPerson);
deepCopyPerson.name = "Aryan";
deepCopyPerson.hobbies["0"] = "Podcasts";
// The original copy will remain unchanged and the deep copy will have its own changes.
console.log(`After deep copy: `, deepCopyPerson);

// Different ways to create shallow copy

// Using Object.assign({}, obj)
// let shallowCopy2 = Object.assign({}, originalPerson);

// Using JSON.parse(JSON.stringify(obj)), though it is not recommended because it will not copy some functions and have other drawbacks
// let shallowCopy3 = JSON.parse(JSON.stringify(originalPerson));

// Using Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))
// let shallowCopy4 = Object.create(
//   Object.getPrototypeOf(originalPerson),
//   Object.getOwnPropertyDescriptors(originalPerson)
// );

// Different ways to create deep copy

// let deepCopy2 = JSON.parse(JSON.stringify(originalPerson));
// this method will loose undifined and infinity

// Using Lodash (_.cloneDeep(obj)), this is also great method but the only drawback is that we have to use the external library
// const _ = require("lodash");
// let deepCopy3 = _.cloneDeep(originalPerson);

// Shallow copy - copy of top level and reference of nested objects, which means change in nested elements will affect the original object's nested object too
// Deep copy - creates whole new copy of original object and changes made to deep copy won't affect the original object
