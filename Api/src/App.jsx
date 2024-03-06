import axios from 'axios';
import React from 'react'

function App() {
  // Data fetching function 
  const getapi = () => {
    const api = 'https://fakestoreapi.com/products';
    axios.get(api)
      .then((product) => {
        console.log(product);
      })
      .catch((error) => console.log(error));
  }
  // Data posting function \

  const postapi = () => {
    const api = 'https://fakestoreapi.com/products';
    axios.post(api, {
      title: 'Nasir Ali',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
    <div className='p-4 flex gap-3'>
     <button onClick={getapi} className='px-2 py-3 bg-red-300 rounded-md'>Call API</button>
     <button onClick={postapi} className='px-2 py-3 bg-red-300 rounded-md'>Add data to API</button>
    </div>
    </>
  )
}

export default App