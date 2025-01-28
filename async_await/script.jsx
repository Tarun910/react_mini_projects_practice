//using async/await
async function fetchDataUsingAsyncAwait() {
    try {
      // Await the fetch call to get the response
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1'); 
  
      // Check if the response is okay (HTTP status 200–299)
      if (!response.ok) {
        throw new Error('Network response was not ok'); // Throw an error for bad responses
      }
  
      // Await parsing the response JSON
      const data = await response.json(); 
      console.log('User data:', data); // Logs user data
    } catch (error) {
      // Handle errors from the fetch or parsing process
      console.error('Error fetching data:', error.message);
    }
  }
  
  // Call the function
  fetchDataUsingAsyncAwait();
  