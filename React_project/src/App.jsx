import React, { useState } from 'react'
import Card from './Components/Card'
import UseState from './Components/useState'
import SecondCard from './Components/SecondCard'
import Props from './Components/Props'
import DummyCard from './Components/DummyCard'
function App() {
  const raw = [
    {name: "Nasir Ali", Profession: "Coder", image: 'https://images.unsplash.com/photo-1480997173806-f69bb3b35b84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name: "Abhay Yadav", Profession: "Artist", image: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name: "Adarsh Raj", Profession: "Business Man", image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name: "Archil Sachan", Profession: "Momos Wala", image: 'https://www.tripsavvy.com/thmb/gYRhS5rFVb3Xz3y7xvzY9FrExS4=/2120x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-503908259-59493c463df78c537bf936d8.jpg'}
  ]
  return (
    <>
      {/* <Card/> */}
      {/* <UseState/> */}
      {/* <SecondCard/> */}
      {/* <Props text='Know More' color='bg-blue-600'/>
       <Props text='Download' color='bg-red-700'/> */}
       <div className='bg-zinc-300 h-screen w-full flex items-center justify-center gap-4'>
     {raw.map((item, index)=>(
      <DummyCard value={item}/>
     ))}
       </div>
    </>

  )
}

export default App   