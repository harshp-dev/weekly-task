// Task 10 - Retrieving and Displaying API Data(async…await)
// Create a program that makes an API call and displays all the retrieved data on a web page.
// Choose a public API (e.g., JSONPlaceholder, OpenWeatherMap) and use the fetch function to make the API request.
// Also implement error handling

const API_URL = "https://jsonplaceholder.typicode.com/todos/1";
async function fetchData() {
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log(data);
  return data;
}

fetchData()
  .then((data) => {
    console.log(`Title is : ${data.title}`);
  })
  .catch((error) => {
    console.log("Error", error);
  });
