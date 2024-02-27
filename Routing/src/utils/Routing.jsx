import React from 'react'
import Home from '../Components/Home'
import About from '../Components/About'
import User from '../Components/User'
import { Route, Routes } from 'react-router-dom'
import UserDetail from '../Components/UserDetail'
function Routing() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/user/' element={<User />} />
            <Route path='/user/:name' element={<UserDetail />} />
        </Routes>
    )
}

export default Routing