import React from 'react'

function Navbar({data}) {
  return (
    <div className='p-10 px-12 flex justify-between'>
        <h3>Orange Cart</h3>
        <div className='bg-orange-600 rounded-md p-2 px-5 text-sm flex gap-2 text-white'>
        <h3>Favourites</h3>
        <h3>{data.filter(item => item.added).length}</h3>
        </div>

    </div>
  )
}

export default Navbar