import React, { useState } from 'react'
import Home from './components/Home'
import { Link, Route, Routes } from 'react-router-dom'
import User from './components/User'

function App() {
  

  return (
    <div className='w-full h-screen bg-zinc-200'>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/user'>User</Link>
      <Link to='/about'>About</Link>
    </nav>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/user' element={<User/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>

      <Home/>
    </div>
  )
}

export default App