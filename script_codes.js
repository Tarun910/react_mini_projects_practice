

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
  
  
  
  
  // extra
  async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  }
  
  fetchData();
  
  
  async function fetchData() {
    try {
      let response = await fetch('https://api.example.com/data');
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  
  
  {userData && (
    <div>
      <h3>User Data:</h3>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Username: {userData.username}</p>
    </div>
  )}
  
  

  
  
//   Fetch API example without managing loading states or resetting errors:

import React, { useState } from 'react';

function FetchUserData() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUserData(data); // Set user data
    } catch (err) {
      setError(err.message); // Set error message
    }
  }

  return (
    <div>
      <h1>Fetch API Example</h1>
      <button onClick={fetchUser}>Fetch User Data</button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {userData && (
        <div>
          <h3>User Data:</h3>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Username: {userData.username}</p>
        </div>
      )}
    </div>
  );
}

export default FetchUserData;





//fetch and display data for multiple users, 

import React, { useState } from 'react';

function FetchUsersData() {
  const [users, setUsers] = useState([]); // State to hold the list of users
  const [error, setError] = useState(null); // State to hold error messages

  async function fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users'); // API to fetch all users
      if (!response.ok) {
        throw new Error('Network response was not ok'); // Handle bad response
      }
      const data = await response.json();
      setUsers(data); // Update state with the array of users
    } catch (err) {
      setError(err.message); // Update state with error message
    }
  }

  return (
    <>
      <h1>Fetch Users Data</h1>
      <button onClick={fetchUsers}>Fetch All Users</button>

      {/* Display error message if there is an error */}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {/* Display user data */}
      <div>
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
              <h3>User ID: {user.id}</h3>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Username: {user.username}</p>
            </div>
          ))
        ) : (
          <p>No users to display.</p>
        )}
      </div>
    </>
  );
}

export default FetchUsersData;
