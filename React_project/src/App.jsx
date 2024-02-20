import React, { useState } from 'react'
import Card from './Components/Card'
import UseState from './Components/useState'
import SecondCard from './Components/SecondCard'
import Props from './Components/Props'
import DummyCard from './Components/DummyCard'
function App() {
  const data = [
    {name: "Nasir Ali", profession: "Coder", image:"https://i.pinimg.com/564x/82/19/e9/8219e955fd50a0eb26959d17f4b173c7.jpg"},
    {name: "John Doe", profession: "Artist", image:"https://i.pinimg.com/736x/57/e7/ec/57e7ec4157f902dc672ef15c43925ae9.jpg"},
    {name: "Rahulz", profession: "Painter", image:"https://i.pinimg.com/564x/63/31/18/633118d76f56a929855799e84bfd723e.jpg"}
  
  ]
  const [realData, setReadData] = useState(data);
  return (
    <>
      {/* <Card/> */}
      {/* <UseState/> */}
      {/* <SecondCard/> */}
      {/* <Props text='Know More' color='bg-blue-600'/>
       <Props text='Download' color='bg-red-700'/> */}
     <div className='w-full h-screen bg-zinc-300 flex gap-4 justify-center items-center'>
        {data.map((item, index)=>(
          <DummyCard key={index} dummy={dummy} values={item}/>
        ))}
     </div>
    </>

  )
}

export default App   