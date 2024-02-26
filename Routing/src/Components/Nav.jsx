import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Nav() {
    return (
        <>
            <nav className='w-full h-20 flex justify-center items-center gap-4 '>
                <NavLink to={"/Home"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/user"}>User</NavLink>
            </nav>
        </>
    )
}

export default Nav