// Task 9 - Retrieving and Displaying API Data(then…catch)
// Create a program that makes an API call and displays all the retrieved data on a web page.
// Choose a public API (e.g., JSONPlaceholder, OpenWeatherMap) and use the fetch function to make the API request.
// Also implement error handling

const API_URL = "https://jsonplaceholder.typicode.com/todos/1";
function fetchData() {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log("Error", error);
    });
}

fetchData().then((data) => {
  console.log(`Getting only title: ${data.title}`);
});
