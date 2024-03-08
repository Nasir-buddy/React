import React, { useContext } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/Context';
import Loading from './Loading';
function Home() {
    const [products] = useContext(ProductContext);

    return products ? (
        <>
        <Nav/>
        <h1 className='absolute left-1/2 -transform-x-[50%] -transform-y-[50%] mt-[2.5%] font-semibold font-sans text-[1.2rem]'>Created by Nasir Ali❤️</h1>
        <div className='w-[85%] h-auto p-5 mt-[5%] flex gap-5 flex-wrap overflow-x-hidden overflow-y-auto '>
            {products.map((item, index)=>{
                return <Link key={index} to={`/details/${item.id}`} className=' h-[17rem] w-[17rem] flex flex-col items-center justify-center rounded-lg  border shadow-xl 
                hover:scale-105  duration-300 p-4 bg-zinc-200 hover:text-cyan-600'>
                <div className='h-[80%] w-full bg-contain bg-no-repeat bg-center mb-2 rounded-lg'
                    style={{ backgroundImage: `url(${item.image})` }}></div>
                <h1 className='font-semibold text-center'>${item.title}</h1>
            </Link>
            })}
        </div>
        </>
    ) : <Loading />
}

export default Home