import React from 'react'

function Card_2({data, index, hcb}) {
    const {image, name, artist, added} = data;
  return (
    <div className='w-60 bg-zinc-100 rounded-md p-3 flex gap-4 relative pb-10'>
        <div className='bg-orange-600 w-20 h-20 rounded-md overflow-hidden '>
            <img className='h-full w-full object-cover' src={image}></img>
        </div>
        <div className=''>
            <h2 className='text-md font-semibold'>{name}</h2>
            <h3 className='text-sm'>{artist}</h3>
        </div>
        <button onClick={()=>{hcb(index)}} className={`${added === true ? "bg-green-600":"bg-orange-600"}
         px-3 py-2 rounded-full absolute bottom-0 left-1/2
        -translate-x-[50%] translate-y-[50%] whitespace-nowrap`}>
        {added === true ? "Added" : "Add to Cart"}
        </button>
    </div>
  )
}

export default Card_2