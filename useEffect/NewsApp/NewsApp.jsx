import React, {useState, useEffect} from 'react';

function NewsApp() {
    const [news, setNews] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        async function fetchNews(){
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setNews(data);
            }catch(err){
                setError(err.message);
            }
        }
        fetchNews();
    },[]);

    return (
        <>
        <h1>Here is the News!</h1>
        {error && <p>Error is : {error}</p>}
        <div>
          {news.length > 0 ? (
            news.map((article, index) => (
                <div key={index}>
                    <h3>Source is : {article.website}</h3>
                    <p>Article Name is : {article.name}</p>
                    <p>Other Details : {article.company.name}, {article.company.name}, {article.company.catchPhrase}</p>
                </div>
            ))
          ): (
            <p>No data available</p>
          )}
        </div>
        </>
    )
}
export default NewsApp;