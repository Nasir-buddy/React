import React, { useState } from 'react'
function SecondCard() {
    const [val, setVal] = useState(false);
  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
        <div className='relative w-60 h-32 bg-zinc-500 rounded-xl flex overflow-hidden'>
            <img className={`shrink-0 transition-transform duration-500 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover `} src='https://i.pinimg.com/564x/c3/a4/f1/c3a4f107ac3054036e6d4a8cb902cb2a.jpg'>
            </img>
            <img className={`shrink-0 transition-transform duration-500 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover `} src='https://i.pinimg.com/564x/ed/75/92/ed759296cc1d0a32e58cde34a5c8a1e8.jpg'>
            </img>
                <span 
                onClick={()=>setVal(()=>!val)} 
                className='w-10 h-10 bg-[#dadada7b] absolute flex justify-center items-center bottom-[15%] left-1/2 -transform-x-[50%] -transform-y-[50%] rounded-full'>
                <FaArrowRight size={".9em"}/>
                </span>
        </div>
    </div>
  )
}

export default SecondCard