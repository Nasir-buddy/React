import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import { Link, Route, Routes } from 'react-router-dom'
import Details from './components/Details'
import Button from './components/Button'
import Create from './components/Create'
import Edit from './components/Edit'
function App() {
  return (
    <div className='flex w-screen h-screen '>

      <Button />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/edit/:id' element={<Edit />}></Route>
        <Route path='/details/:id' element={<Details />}></Route>
      </Routes>
    </div>
  )
}

export default App