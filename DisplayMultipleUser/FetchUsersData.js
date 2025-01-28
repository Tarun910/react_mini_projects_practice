import React, {useState} from 'react';

function FetchUsersData(){
const [users, setUsers] = useState([]);
const [error, setError] = useState('');
const [loading, setLoading] = useState(false);
     async function fetchUsers(){
        setLoading(true);
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');

            const data = await response.json();
            setUsers(data);
        }catch(err){
            setError(err.message);
        }finally{
            setLoading(false);
        }
    }
    return (
        <>
        <h1>Click to Fetch User Data!</h1>
        <button onClick={fetchUsers}>fetch</button>
        {loading && <p>Loading...</p>}
        {error && <p style = {{color : 'red'}}>Error : {error}</p>}
        {users.length > 0 ? (
            users.map((user) => (
                <div key={user.id}>
                    <h3>Userdata looks like: </h3>
                    <p>Name is : {user.name}</p>
                    <p>Email is : {user.email}</p>
                    <p>Address : {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                    
                </div>
            ))
        ):(
            <p>No data available</p>
        )}
        
        </>
    );
}

export default FetchUsersData;




{/* <h3>User Data:</h3>
<p><strong>Name:</strong> {user.name}</p>
<p><strong>Email:</strong> {user.email}</p>
<p><strong>Username:</strong> {user.username}</p>
<p><strong>Phone:</strong> {user.phone}</p>
<p><strong>Website:</strong> {user.website}</p>
<h4>Address:</h4>
<p><strong>Street:</strong> {user.address.street}</p>
<p><strong>Suite:</strong> {user.address.suite}</p>
<p><strong>City:</strong> {user.address.city}</p>
<p><strong>Zipcode:</strong> {user.address.zipcode}</p>
<h4>Company:</h4>
<p><strong>Company Name:</strong> {user.company.name}</p>
<p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
<p><strong>BS:</strong> {user.company.bs}</p> */}