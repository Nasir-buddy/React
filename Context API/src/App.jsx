import React, { useState } from 'react'

function App() {
  const [user, setUser] = useState({
    "id": 1,
    "email": "john@gmail.com",
    "username": "johnd",
    "password": "m38rmF$",
    "name": {
      "firstname": "john",
      "lastname": "doe"
    },
    "phone": "1-570-236-7033",
    "__v": 0
  },
    {
      "id": 2,
      "email": "morrison@gmail.com",
      "username": "mor_2314",
      "password": "83r5^_",
      "name": {
        "firstname": "david",
        "lastname": "morrison"
      },
      "phone": "1-570-236-7033",
      "__v": 0
    },
  );

  return (
    <div className='w-full h-screen bg-zinc-200'>
      App
    </div>
  )
}

export default App