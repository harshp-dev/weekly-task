const fs = require("fs");
console.log("Start of script");

fs.readFile("Sample.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file: ", err);
    return;
  }
  console.log("Async file read completed");
});

setTimeout(() => {
  console.log("Inside SetTimeout ");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

console.log("End of script");
