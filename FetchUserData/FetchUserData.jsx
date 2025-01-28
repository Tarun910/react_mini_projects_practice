import React, {useState} from 'react';

function FetchUserData() {
const [user, setUser] = useState('');
const [error, setError] = useState('');

  async function fetchUser(){
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      if(!response.ok){
        throw new Error('Network response was not ok');
      }
    const data = await response.json();
    setUser(data);
    }catch(err){
      setError(err.message);
    }
  }
  
  return (
<>
<h1>Click to Fetch Data !</h1>
<button onClick={fetchUser}>fetch</button>
{error && <p style = {{color : 'red'}}>Error : {error}</p>}
{user && (
  <div>
    <h3>user data look like : </h3>
    <p>Name of user is : {user.name}</p>
    <p>Email of user is : {user.email}</p>
    <p>Username of user is : {user.username}</p>
  </div>
)}

</>

  );
}
export default FetchUserData;