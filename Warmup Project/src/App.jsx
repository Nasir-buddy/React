import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import { Link, Route, Routes } from 'react-router-dom'
import Details from './components/Details'
function App() {
  return (
    
    <div className='flex w-screen h-screen '>
      <Link to='/' className='bg-red-300 h-fit absolute p-1 rounded-md px-3'>
        Home
      </Link>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/details/:id' element={<Details />}></Route>
      </Routes>
    </div>
  )
}

export default App