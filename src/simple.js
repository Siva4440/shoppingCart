import React, { useState } from 'react';
import "./App.css";

export default function Simple() {

    const [count,setCount]= useState(0);

    const increment = ()=>{
        setCount(count +1)
    }

    const decrement = ()=>{
        setCount(count - 1)
    }
  return (
    <div className='container'>
        <h1 className='heading'>{count}</h1>
        <div>
        <button onClick={increment} className='btn1' >Increment</button>
        <button onClick={decrement} className=' btn2' disabled={count===0} >Decrement</button>
        </div>
       
    </div>
  )
}
