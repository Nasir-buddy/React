import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function User() {
  return (
    <div className='w-1/2 m-auto'>
      <h1 className='text-xl font-semibold text-[2vw] mb-10'>User</h1>
      <div className='flex flex-col mt-5 w-1/2'>
        <Link className='bg-red-200 p-3 hover:bg-red-300 mb-3 rounded-md' to="/user/nasir-ali">Nasir Ali</Link>
        <Link className='bg-red-200 p-3 hover:bg-red-300 mb-3 rounded-md' to="/user/adarsh">Adarsh</Link>
        <Link className='bg-red-200 p-3 hover:bg-red-300 mb-3 rounded-md' to="/user/rohit">Rohit</Link>
      </div>
      <hr />
      <Outlet />
    </div>
  )
}

export default User