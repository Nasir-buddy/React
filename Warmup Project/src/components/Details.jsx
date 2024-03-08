import React from 'react'
import { Link } from 'react-router-dom'
function Details() {
  return (
    <div className='w-[90%] h-full m-auto flex p-[10%] items-center'>
        <img className='object-contain w-[50%] h-[100%] mr-10' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
        <div className='ml-10 mt-[7%] text-[1.3rem] px-[5%] py-[3%] bg-zinc-200 rounded-lg h-fit'>
            <h1 className='text-[2rem] font-semibold mb-7'> Title :  Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
            <h2 className='text-[1.5rem] font-semibold mb-7 text-red-500'>$109.95</h2>
            <p className='text-[1.5rem] font-semibold mb-7'> Descripstion : Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
            <h2 className='text-[1.5rem] font-semibold text-zinc-500 mb-7'> Category : men's clothing</h2>
            <Link>Edit</Link>
            <Link>Delete</Link>
        </div>
    </div>
  )
}

export default Details