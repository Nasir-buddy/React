import React, { useState } from 'react'
import Card from './Components/Card'
import UseState from './Components/useState'
import SecondCard from './Components/SecondCard'
import Props from './Components/Props'
function App() {

  return (
    <>
    {/* <Card/> */}
    {/* <UseState/> */}
    {/* <SecondCard/> */}
    <Props text='Know More' color='bg-blue-600'/>
    <Props text='Download' color='bg-red-700'/>
    </>

  )
}

export default App   