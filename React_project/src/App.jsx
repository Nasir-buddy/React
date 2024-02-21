import React, { useState } from 'react'
import Card from './Components/Card'
import UseState from './Components/useState'
import SecondCard from './Components/SecondCard'
import Props from './Components/Props'
import DummyCard from './Components/DummyCard'
import Card_2 from './Components/Card_2'
import Navbar from './Components/Navbar'
import Form from './Components/Form'// These data is for practicing the map and button click handlers
function App() {
  const raw = [
    { name: "Nasir Ali", Profession: "Coder", image: 'https://images.unsplash.com/photo-1480997173806-f69bb3b35b84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', friend: false },
    { name: "Abhay Yadav", Profession: "Artist", image: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', friend: false },
    { name: "Adarsh Raj", Profession: "Business Man", image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', friend: false },
    { name: "Archil Sachan", Profession: "Momos Wala", image: 'https://www.tripsavvy.com/thmb/gYRhS5rFVb3Xz3y7xvzY9FrExS4=/2120x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-503908259-59493c463df78c537bf936d8.jpg', friend: false }
  ]

  const [realData, setData] = useState(raw);
  const handlClick = (cardIndex) => {
    setData((prev) => {
      return prev.map((item, index) => {
        if (index === cardIndex) {
          return { ...item, friend: !item.friend }
        }
        return item;
      })
    })
  }

  // music player data

  const musicData = [
    { image: 'https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?q=80&w=916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Meri Ashiqui', artist: 'Nasir Ali', added: false },
    { image: 'https://images.unsplash.com/photo-1459802071246-377c0346da93?q=80&w=1009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: '50 Cent', artist: 'Shreya Goyal', added: false },
    { image: 'https://images.unsplash.com/photo-1474222300086-56f8a438e47d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Give Me Everything', artist: 'Arjit Singh', added: false },
    { image: 'https://images.unsplash.com/photo-1504060765228-f97d1772ff9e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Tu hi Rub', artist: 'Priya Panday', added: false },
    { image: 'https://images.unsplash.com/photo-1594897030264-ab7d87efc473?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Summer High', artist: 'Insha Noori', added: false },
  ]
  const [songData, setSongData] = useState(musicData);
  const handleCardButton = (cIndex)=>{
    setSongData((previous)=>{
      return previous.map((item, index)=>{
        if(index === cIndex){
          return {...item, added: !item.added}
        }
        return item;
      })
    })
  }
  return (
    <>
      {/* <Card/> */}
      {/* <UseState/> */}
      {/* <SecondCard/> */}
      {/* <Props text='Know More' color='bg-blue-600'/>
       <Props text='Download' color='bg-red-700'/> */}
      {/* <div className='bg-zinc-300 h-screen w-full flex items-center justify-center gap-4'>
     {realData.map((item, index)=>(
      <DummyCard key={index} index={index} friendButtonHandle={handlClick} value={item}/>
     ))}
       </div> */}
      {/* <div className='w-full h-screen bg-zinc-300'>
        <Navbar data={songData}/>
        <div className='p-4 px-12 flex flex-wrap gap-12 mt-10'>
          {songData.map((item, index)=>{
            return <Card_2 key={index} index={index} hcb={handleCardButton} data={item}/>
          })}
        </div>
      </div> */}
      <Form />

    </>

  )
}

export default App   