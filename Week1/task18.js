// Task 18 - Objects basic
// Create an object called book with properties title, author, and pages.
// Add a method called displayInfo to the object, which logs a message using the properties to
// display information about the book. Instantiate the object with sample values and call the
// displayInfo method.

let book = {
  // adding properties
  title: "The Alchemist",
  author: "Paulo Coelho",
  pages: 250,
  // adding method to display the properties
  displayInfo() {
    console.log(
      `Book name is ${this.title} and the author of the book is ${this.author} and it have ${this.pages} pages`
    );
  },
};

// calling the method
book.displayInfo();
