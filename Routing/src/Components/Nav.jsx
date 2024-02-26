import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Nav() {
    return (
        <>
            <nav className='w-full h-20 flex justify-center items-center gap-4 '>
                <NavLink style={(e) => {
                    return {
                        color: e.isActive ? "red" : "",
                        fontWeight: e.isActive ? 'bold' : ''
                    }
                }} to={"/"}>Home</NavLink>
                <NavLink style={(e) => {
                    return {
                        color: e.isActive ? 'red' : '',
                        fontWeight: e.isActive ? 'bold' : ''
                    } 
                }} to={"/about"}>About</NavLink>
                <NavLink style={(e) => {
                    return {
                        color: e.isActive ? 'red' : '',
                        fontWeight: e.isActive ? 'bold' : ''
                    }
                }} to={"/user"}>User</NavLink>
            </nav>
        </>
    )
}

export default Nav