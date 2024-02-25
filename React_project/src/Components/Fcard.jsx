import React from 'react'

function Fcard({user, handleFormRemove, id}) {
  return (
    <div className='w-40 h-full p-2 px-3 bg-zinc-200 rounded-lg flex flex-col items-center justify-center'>
    <div className='image w-12 h-12 rounded-full bg-zinc-100 overflow-hidden'>
      <img className='w-full h-full object-cover' src={user.image} alt="" />
    </div>
    <h1 className='mt-1 text-xl font-semibold text-center leading-none'>{user.name}</h1>
    <h2 className='opacity-40 text-md font-semibold'>{user.email}</h2>
    <p className='mt-1 text-center font-semibold leading-1 tracking-tight '>Lorem, ipsum dolor sit amet cpit quia unde dolorem.</p>
    <button onClick={()=>handleFormRemove(id)} className='bg-red-500 rounded-md px-3 py-2 mt-2'>Remove It</button>
  </div>
  )
}

export default Fcard