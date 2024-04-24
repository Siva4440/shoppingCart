import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Res() {
    const [firstName,setFirstName] = useState("Siva");

    const handleChange=(e)=>{
      setFirstName(e.target.value)
    }

     useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(response=> console.log("response", response.data))

    },[]);
  return (
    <div>
        <input type='text' onChange={handleChange} /> {firstName}
    </div>
  )
}
