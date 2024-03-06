import React, { useState } from 'react'
import Home from './components/Home'
import User from './components/User'
import About from './components/About'
import { Link, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div className='w-full h-screen bg-zinc-200'>
      <nav className='flex justify-center gap-3 py-2'>
        <Link to='/'>Home</Link>
        <Link to='/user'>User</Link>
        <Link to='/about'>About</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/user' element={<User />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>

      <Home />
    </div>
  )
}

export default App