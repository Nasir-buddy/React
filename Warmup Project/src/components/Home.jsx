import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../context/Context';
import Loading from './Loading';
import axios from '../context/axios';
function Home() {
    const [products] = useContext(ProductContext);
    const { search } = useLocation();
    const category = decodeURIComponent(search.split("=")[1]);

    const [filteredProducts, setFilterProducts] = useState(null);


    const getProductsCategory = async () => {
        try {
            const { data } = await axios.get(`/products/category/${category}`);
            setFilterProducts(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (!filteredProducts) { setFilterProducts(products) };
        if (category != "undefined") getProductsCategory();
    }, [category, products])

    return products ? (
        <>
            <Nav />
            <h1 className='absolute left-1/2 -transform-x-[50%] -transform-y-[50%] mt-[2.5%] font-semibold font-sans text-[1.2rem]'>Created by Nasir Ali❤️</h1>
            <div className='w-[85%] h-auto p-5 mt-[5%] flex gap-5 flex-wrap overflow-x-hidden overflow-y-auto justify-center'>
                {filteredProducts && filteredProducts.map((item, index) => {
                    return <Link key={index} to={`/details/${item.id}`} className=' h-[20rem] w-[20rem] flex flex-col items-center justify-center rounded-lg  border shadow-xl 
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