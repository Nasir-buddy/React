import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate('/user');
  }
  return (
    <div className='w-1/2 m-auto'>
      <h1 className='text-xl font-semibold text-[2vw] mb-10 text-red-500'>User User Details</h1>
      <h1 className='text-xl mb-5'>Hii! {name}</h1>
      <button onClick={goBackHandler} className='bg-red-200 rounded-md px-3 py-2'>Go Back</button>
    </div>
  )
}

export default UserDetail