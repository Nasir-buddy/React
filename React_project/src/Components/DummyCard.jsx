import React from 'react'

function DummyCard({values, dummy}) {
    const {image, name, profession} = values;
  return (
    <div className='w-52 bg-white rounded-md overflow-hidden '>
        <div className='w-fll h-40 bg-sky-200 '>
            <img className='w-full h-full object-cover object-[center_top]' src={image}></img>
        </div>
        <div className='w-full p-3'>
            <h3 className='text-xl'>{name}</h3>
            <h5 className='text-md'>{profession}</h5>
            <button onClick={dummy} className='px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md'>Add Friend</button>
        </div>
    </div>
  )
}

export default DummyCard        