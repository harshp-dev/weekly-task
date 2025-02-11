// Task 19 - reference and modification
// Create two objects named originalObject and modifiedObject.
// Assign the same properties to both objects. Modify one property in modifiedObject and
// observe how it affects the other object due to reference. Log the properties of both objects
// to the console.

let originalObject = {
  name: "Harsh",
  age: 25,
  Type: "Employee",
  moreInfo: {
    company: "bacancy",
  },
};

// let modifiedObject = {
//   name: "Harsh",
//   age: 25,
//   Type: "Employee",
// };

// modifiedObject.name = "Aryan";
// console.log(`Modified Object Name: ${modifiedObject.name}`);
// console.log(`Original Object Name: ${originalObject.name}`);

let modifiedObject = originalObject;

modifiedObject.name = "Aryan";
console.log(`Modified Object Name: ${modifiedObject.name}`);
console.log(`Original Object Name: ${originalObject.name}`);

let shallowCopy = { ...originalObject };
shallowCopy.name = "Jeet";
console.log(shallowCopy);
