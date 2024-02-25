import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <>
            <nav className='w-full h-20 flex justify-center items-center gap-4 '>
                <Link className='rounded-md bg-sky-500 px-3 py-2' to={"/Home"}>Home</Link>
                <Link className='rounded-md bg-sky-500 px-3 py-2' to={"/about"}>About</Link>
                <Link className='rounded-md bg-sky-500 px-3 py-2' to={"/user"}>User</Link>
            </nav>
        </>
    )
}

export default Nav