import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
        <Nav/>
        <h1 className='absolute left-1/2 -transform-x-[50%] -transform-y-[50%] mt-[2.5%] font-semibold font-sans text-[1.2rem]'>Created by Nasir Ali❤️</h1>
        <div className='w-[85%] h-auto p-5 mt-[5%] flex gap-5 flex-wrap overflow-x-hidden overflow-y-auto'>
            <Link to={'/details/7'} className=' h-[21rem] w-[21rem] flex flex-col items-center justify-center rounded-lg  border shadow-xl 
                hover:scale-105  duration-300 p-4 bg-zinc-200'>
                <div className='h-[80%] w-full bg-contain bg-no-repeat bg-center mb-2 rounded-lg'
                    style={{ backgroundImage: "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)" }}></div>
                <h1 className='font-semibold text-center'>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</h1>
            </Link>
        </div>
        </>
    )
}

export default Home