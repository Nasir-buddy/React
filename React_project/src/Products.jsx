import React, { useState } from 'react'

function Products({name , data}) {
    
    return (
        <div className='text-white mt-2'>
        <h4 className='p-3 text-black'>{name}</h4>
        <h4 className='p-3 text-black'>{data.age}</h4>
        <h4 className='p-3 text-black'>{data.name}</h4>
        </div>
    )
}

export default Products