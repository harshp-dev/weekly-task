// Task 22 - Object iteration and method
// Create an object called c with properties name, age, and an array grades.
// Add a method named calculateAverage to the object, which calculates and returns the average
// of the grades. Iterate through the object properties using a loop and log each property and
// its value. Call the calculateAverage method and log the result.

let student = {
  name: "Harsh",
  age: 25,
  grades: [29, 27, 24, 30, 21],
  calculateAverage() {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    return sum;
  },
};

for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}
console.log(
  `The summation of grades of student is: ${student.calculateAverage()}`
);
