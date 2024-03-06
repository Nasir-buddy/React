import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/Context';
function User() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1 className='text-xl m-2'>User List</h1>
      <div className='w-1/4 bg-blue-200 rounded-md p-1 m-2'>
        {user.map((u)=>(
          <Link to={'/user/${u.id}'} className='flex m-2 bg-red-200 rounded-md p-2'>
          {u.username}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default User