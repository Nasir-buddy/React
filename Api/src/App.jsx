import axios from 'axios';
import React from 'react'

function App() {
  const getapi = () => {
    const api = 'https://fakestoreapi.com/products';
    axios.get(api)
      .then((product) => {
        console.log(product);
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
    <div className='p-4 '>
      <button onClick={getapi} className='px-2 py-3 bg-red-300 rounded-md'>Call API</button>
    </div>
    </>
  )
}

export default App