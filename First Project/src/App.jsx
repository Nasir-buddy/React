import React from 'react'
import Background from './Components/Background'
import Foreground from './Components/Foreground'
function App() {
  return (
    <div className='relative h-screen w-full bg-zinc-800 '>
      <Background />
      <Foreground/>
    </div>
  )
}

export default App