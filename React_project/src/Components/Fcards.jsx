import React from 'react'
import Fcard from './Fcard'
function Fcards({users, handleFormRemove}) {
  return (
    <div className='w-full max-h-96 overflow-auto  rounded-lg p-4 flex justify-center gap-4 flex-wrap'>
      {users.map((item, index)=>{
        return <Fcard handleFormRemove={handleFormRemove} id={index} key={index} user={item}/>
      })}
    </div>
  )
}

export default Fcards