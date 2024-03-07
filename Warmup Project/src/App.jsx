import React from 'react'

function App() {
  return (

    <div className='flex w-screen h-screen '>
    <h1 className='absolute left-1/2 -transform-x-[50%] -transform-y-[50%] mt-[2.5%] font-semibold font-sans text-[1.2rem]'>Created by Nasir Ali❤️</h1>
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

      <div className='w-[85%] h-auto p-5 mt-[5%] flex gap-5 flex-wrap overflow-x-hidden overflow-y-auto'>


        <div className=' h-[21rem] w-[21rem] flex flex-col items-center justify-center rounded-lg  border shadow-xl 
         hover:scale-105  duration-300 p-4 bg-zinc-200'>
          <div className='h-[80%] w-full bg-contain bg-no-repeat bg-center mb-2 rounded-lg'
          style={{backgroundImage:"url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"}}></div>
          <h1 className='font-semibold text-center'>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</h1>
        </div>

        
      

      </div>
    </div>
  )
}

export default App