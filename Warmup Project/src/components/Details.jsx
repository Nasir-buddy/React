import axios from '../context/axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from './Loading';

function Details() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const getSingleProduct = async () => {
      try{
        const { data } = await axios.get(`/products/${id}`);
        setProduct(data);
        console.log(data)
      } catch(error){
        console.log(error);
      }
  }
  useEffect(()=>{
    getSingleProduct();
  }, []);

  return product ? (
    <div className='w-[90%] h-full m-auto flex p-[10%] items-center'>
      <img className='object-contain w-[50%] h-[100%] mr-10' src={`${product.image}`} alt="" />
      <div className='ml-10 mt-[7%] text-[1.3rem] px-[5%] py-[3%] bg-zinc-200 rounded-lg h-fit'>
        <h1 className='text-[2rem] font-semibold mb-7'>{product.title}</h1>
        <h2 className='text-[1.5rem] font-semibold mb-7 text-red-500'>$ {product.price}</h2>
        <p className='text-[1.5rem] font-semibold mb-7'>{product.description}</p>
        <h2 className='text-[1.5rem] font-semibold text-zinc-500 mb-7'>{product.category}</h2>
        <Link className='py-1 px-3 mr-5 border-[5px] border-blue-200 rounded-lg mb-3 font-semibold'>Edit</Link>
        <Link className='py-1 px-3 border-[5px] border-red-200 rounded-lg mb-3 font-semibold'>Delete</Link>
      </div>
    </div> 
  ) : <Loading />
}

export default Details