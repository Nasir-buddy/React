import React from 'react'

function Nav() {
  return (
    <>
        <nav className=' w-[15%] h-full bg-zinc-200 flex flex-col items-center pt-5'>
        <a className='py-3 px-2 border border-blue-200 rounded-md mb-3 text-blue-500 font-semibold' href="/create">Add New Product </a>
        <hr className='w-[80%] my-3'/>
        <h1 className='w-[80%] mb-3 font-semibold'>Category Filter</h1>
        <ul className='w-[80%] '>
          <li className='flex items-center gap-2 mb-3 rounded-lg p-1'>
            <span className='w-[12px] h-[12px] bg-cyan-800 rounded-full'></span> Cat 1
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav