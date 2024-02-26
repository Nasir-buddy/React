import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Nav() {
    return (
        <>
            <nav className='w-full h-20 flex justify-center items-center gap-4 '>
            {/* By using the css style properites  */}
                <NavLink style={(e) => {
                    return {
                        color: e.isActive ? 'red' : '',
                        fontWeight: e.isActive ? 'bold' : '',
                    }
                }} to={"/"}>Home</NavLink>
                {/* By using the className in tailwindcss properties  */}
                <NavLink className={(e) => {
                    return [
                        e.isActive ? 'text-red-300' : '',
                        e.isActive ? 'font-bold' : ''
                    ].join(' ');
                }} to={"/about"}>About</NavLink>
                {/* By using the little bit change direct returning the tag  */}
                <NavLink to={"/user"}>{(e) => {
                    return (
                        <span className={[
                            e.isActive ? 'text-red-300' : '',
                            e.isActive ? 'font-bold' : ''
                        ].join(' ')} >User</span>
                    )
                }}</NavLink>
            </nav>
        </>
    )
}

export default Nav