const fs = require("fs");
console.log("Script starting");

const data = fs.readFileSync("sample.txt", "utf-8");
console.log("Sync Read Completed");
setTimeout(() => {
  console.log("Inside Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Resolved");
});

console.log("End of script");
