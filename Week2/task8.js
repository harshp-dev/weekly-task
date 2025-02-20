// Task 8 - Sleep function
// Create sleep function which can stop for loop for given amount of time

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
async function sleepTest() {
  for (let i = 0; i < 5; i++) {
    await sleep(3000);
    console.log(i);
  }
  console.log("done");
}

sleepTest();
