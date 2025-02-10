// Task 2 - while loop with forEach
// Create a program that uses a while loop to iterate through an array of strings.
// Inside the loop, use forEach to print each string with an appended exclamation mark.
// The loop should terminate once the length of the current string exceeds 8 characters.
// Comment on the differences between while and forEach in this context.
const arr = [
  "Apple",
  "Google",
  "Einfochipssss",
  "Amazon",
  "Meta",
  "Tesla",
  "SpaceX",
];

let i = 0;
while (i < arr.length) {
  // If length of word exceeds 8 then break
  if (arr[i].length > 8) {
    break;
  }

  // if not break then append the word with "!"
  [arr[i]].forEach((element) => {
    console.log(element + "!");
  });

  i++;
}

// Output: "Apple!", "Google!"

// While loops allows control flow, Foreach iterates through each elements
// While loops can stop early if we want to, foreach won't stop as there is no break in it.
