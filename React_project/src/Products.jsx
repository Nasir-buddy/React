import React, { useState } from 'react'

function Products() {
    var [a, b] = useState(13);
    return (
        <div className='text-white mt-2'>
            <div className='w-44 h-32 rounded-xl bg-blue-400 p-3 text-white'>
                <h4>Starting React</h4>
                <h4>{a}</h4>
                <button onClick={() => b(a + 1)}
                    className='h-10px 
                                w-10px 
                                bg-red-500 
                                p-2 
                                rounded-xl'>
                                Click here
                </button>

            </div>
        </div>
    )
}

export default Products