import React, { useEffect, useState } from 'react'

function UseEffect() {
  const[counter,setCounter]=useState(0);

useEffect(()=>{
  setTimeout(()=>{
    setCounter((counter)=>counter+1)
  },1000);
});

//fetch data api
  const [apiData, setApiData] = useState(null);
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())   // FIXED
      .then(data => setApiData(data.id));
  }, []);
  return (
   <>
   <h1>UseEffect Example: Self Counter</h1>
    <h2>{counter}</h2>
    <h3>API Title: {apiData}</h3>
   </>
  )
}

export default UseEffect