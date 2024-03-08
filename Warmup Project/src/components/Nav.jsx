import React, { useContext } from 'react'
import { ProductContext } from '../context/Context';
import { Link } from 'react-router-dom';

function Nav() {
  const [products] = useContext(ProductContext);
  let distinct_category = products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];
  console.log(distinct_category)
  return (
    <>
      <nav className=' w-[15%] h-full bg-zinc-200 flex flex-col items-center pt-5'>
        <a className='py-3 px-2 border border-blue-200 rounded-md mb-3 text-blue-500 font-semibold' href="/create">Add New Product </a>
        <hr className='w-[80%] my-3' />
        <h1 className='w-[80%] mb-3 font-semibold'>Category Filter</h1>
        <div className='w-[80%] '>
          {distinct_category.map((item, index) => (
            <Link to={`/?category=${item}`} key={index} className='flex items-center gap-2 mb-3 rounded-lg p-2
            relative text-black hover:text-cyan-600 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-cyan-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-cyan-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]
            
          '>
              <span className='w-[12px] h-[12px] bg-cyan-600 rounded-full'></span>{item}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}

<div class="h-[100svh] flex items-center justify-center">
  <div
    class="">
    <span>Hover Over Me</span>
  </div>
</div>

export default Nav

