import React, { useState } from 'react'
import Products from './Products'

function App() {
      var [a,b] = useState(14);
  return (
    <>
      <div className="w-screen h-screen bg-zinc-400 p-4">
        <div className='w-80 h-80 rounded-xl bg-red-300'>
          <Products name="passingValue" data={{age:23 , name: "Nasir Ali"}}/>
        </div>
      </div>
    </>
  )
}

export default App   