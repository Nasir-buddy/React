import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';

function Button() {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const category = query.get('category');
    return (
        <div className='relative'>
            <div className='absolute mt-9 ml-[21vw] '>
                {((category === null)) ? null :
                    (<Link to='/' class="relative inline-block text-lg group">
                        <span class="relative z-10 block px-10 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-cyan-600 rounded-lg ">
                            <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-cyan-600 group-hover:-rotate-180 ease"></span>
                            <span class="relative text-cyan-600 group-hover:text-white">Home</span>
                        </span>
                        <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-cyan-600 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </Link>)}
            </div>
        </div>
    )
}

export default Button

