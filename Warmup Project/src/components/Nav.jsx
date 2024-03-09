import React, { useContext } from 'react'
import { ProductContext } from '../context/Context';
import { Link } from 'react-router-dom';

function Nav() {
  const [products] = useContext(ProductContext);
  let distinct_category = products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];
  return (
    <>
      <nav className='w-[15%] h-full bg-zinc-200 flex flex-col items-center pt-5'>
        <a href="/create" class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group">
          <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
          <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-cyan-600 opacity-100 group-hover:-translate-x-5"></span>
          <span class="relative w-full text-left text-cyan-600 transition-colors duration-200 ease-in-out group-hover:text-gray-900">Add New Product</span>
          <span class="absolute inset-0 border-2 border-cyan-600 rounded-full"></span>
        </a>
        <hr className='w-[80%] my-3' />
        <h1 className='w-[80%] mb-3 font-semibold'>Category Filter</h1>
        <div className='w-[80%] '>
          {distinct_category.map((item, index) => (
            <Link to={`/?category=${item}`} key={index} className='flex items-center gap-2 mb-3 rounded-lg p-2
            relative text-black hover:text-cyan-600 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-cyan-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-cyan-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>
              <span className='w-[12px] h-[12px] bg-cyan-600 rounded-full'></span>{item}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Nav

