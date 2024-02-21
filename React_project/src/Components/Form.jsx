import React, { useRef } from 'react'

function Form() {
    const name = useRef(null);
    const age = useRef(null);
    const email = useRef(null);
    const handlereload = (details)=>{
        details.preventDefault();
        console.log(name.current.value, age.current.value, email.current.value)
    }
  return (
    <form action='' className='p-4' onSubmit={handlereload}>
        <input ref={name}  type='text' placeholder='Enter your name'></input>
        <input ref={age} type='text' placeholder='Enter your age'></input>
        <input ref={email} type='text' placeholder='Enter your email'></input>
        <button type='submit' className='bg-blue-100 rounded-full px-5 py-3'>Submit</button>

    </form>
  )
}

export default Form 