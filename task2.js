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
  if (arr[i].length > 8) {
    break;
  }

  // Process only the current element using forEach
  [arr[i]].forEach((element) => {
    console.log(element + "!");
  });

  i++;
}
