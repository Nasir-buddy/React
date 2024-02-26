import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Nav() {
    return (
        <>
            <nav className='w-full h-20 flex justify-center items-center gap-4 '>
                <NavLink className={(e)=>{
                    return [
                        e.isActive ? 'text-red-300' : '', 
                        e.isActive ? 'font-bold' : ''
                    ].join(' ');
                }} to={"/"}>Home</NavLink>
                <NavLink className={(e)=>{
                    return [
                        e.isActive? 'text-red-300' : '', 
                        e.isActive? 'font-bold' : ''
                    ].join(' ');
                }} to={"/about"}>About</NavLink>
                <NavLink className={(e)=>{
                    return [
                        e.isActive? 'text-red-300' : '', 
                        e.isActive? 'font-bold' : ''
                    ].join(' ');
                }} to={"/user"}>User</NavLink>
            </nav>
        </>
    )
}

export default Nav