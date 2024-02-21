import React from 'react'

function DummyCard({value}) {
    const {image, name, Profession} = value;
    return (
        <div className='w-60 h-65 overflow-hidden rounded-xl bg-zinc-100'>
            <div className='w-full h-41 rounded-md overflow-hidden'>
                <img className='object-bottom' src={image}></img>
            </div>
            <div className='w-full p-4 h-full '>
                <h2 className='text-black font-semibold text-xl'>{name}</h2>
                <h2 className='text-black font-semibold text-sm'>{Profession}</h2>
                <button className='bg-blue-300 p-2 rounded-md mt-2'>Add Friend</button>
            </div>
        </div>
    )
}

export default DummyCard        