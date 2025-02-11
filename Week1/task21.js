// Task 21 - Object comparison

// Create two objects user1 and user2 with similar properties.
// Write a function compareObjects that compares the properties of both objects.
// The function should log whether the objects are equal or not based on their properties.
// Test the function with user1 and user2

let user1 = {
  name: "Harsh",
  age: 25,
  role: "Developer",
};

let user2 = {
  name: "Harsh",
  age: 25,
  role: "QA",
};

function compareObjects(user1, user2) {
  console.log(`result of comparing name is: ${user1.name == user2.name}`);
  console.log(`result of comparing name is: ${user1.age == user2.age}`);
  console.log(`result of comparing name is: ${user1.role == user2.role}`);
}

compareObjects(user1, user2);
