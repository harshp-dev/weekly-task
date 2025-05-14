// Task 2 - map, filter and reduce
// Create program of which required map, filter chaining, and after that replace that with reduce
// Ex.

// create array of name of student  whose age is greater than 18

const students = [
  { name: "jeel", age: 18 },
  { name: "franklin", age: 25 },
  { name: "vivek", age: 15 },
  { name: "hardik", age: 23 },
];

// Using filter and map
const result = students
  .filter((student) => student.age > 18)
  .map((student) => student.name);

console.log(result);

// Using reduce
const resultOfReduce = students.reduce((acc, student) => {
  if (student.age > 18) {
    acc.push(student.name);
  }
  return acc;
}, []);

console.log(resultOfReduce);
