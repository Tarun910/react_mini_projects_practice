//using promises
function fetchDataUsingPromise() {
    // Using Fetch API to call a public API endpoint
    fetch('https://jsonplaceholder.typicode.com/users/1') // Endpoint returns user data
      .then((response) => {
        // Check if the response is okay (HTTP status 200–299)
        if (!response.ok) {
          throw new Error('Network response was not ok'); // Throw an error for bad responses
        }
        return response.json(); // Parse response data as JSON
      })
      .then((data) => {
        // Handle the parsed JSON data
        console.log('User data:', data); // Logs user data
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error('Error fetching data:', error.message);
      });
  }
  
  // Call the function
  fetchDataUsingPromise();