import React, { useState } from 'react'

function UseState() {
    const [val, setval] = useState([1,2,3,4,5]);
  return (
    <>
    {val.map(item =><h1>{item}</h1>)}
    <button className='
    p-2 
    bg-blue-400 
    rounded-xl'
    onClick={
        ()=>{setval(()=>{ return val.filter((item) => item % 2 !== 0)})}
    }
    >click</button>
    
    </>
  )
}

export default UseState 