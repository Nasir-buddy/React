import React from 'react'
import { Link } from 'react-router-dom'
function Details() {
  return (
    <div className='w-[100%] h-full m-auto flex p-[10%] '>
        <img className='object-contain w-[50%] h-[100%]' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
        <div className='ml-10 mt-[6%] text-[1.3rem] px-[5%] py-[10%] bg-zinc-200 rounded-lg h-fit'>
            <h1 className='text-[2rem] font-semibold'><span>Title : </span> Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
            <h2 className='text-[1.5rem] font-semibold'><span>Price : </span> $109.95</h2>
            <p className='text-[1.5rem] font-semibold'><span>Descripstion : </span>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
            <h2 className='text-[1.5rem] font-semibold'><span>Category : </span>men's clothing</h2>
            <Link>Edit</Link>
            <Link>Delete</Link>
        </div>
    </div>
  )
}

export default Details