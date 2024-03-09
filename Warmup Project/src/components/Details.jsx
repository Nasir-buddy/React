import axios from '../context/axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading';
import Button from './Button';
import { ProductContext } from '../context/Context';

function Details() {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  // const getSingleProduct = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     setProduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    if (!product) {
      setProduct(products.filter((p) => p.id == id)[0]);
    }
    // getSingleProduct();
  }, []);

  const productDeleteHandler = (id) => {
    const filteredProducts = products.filter((p) => p.id !== id);;
    setProducts(filteredProducts);
    localStorage.setItem('products', JSON.stringify(filteredProducts));
    navigate('/');
  }
  return product ? (
    <div className='w-[95%] h-full m-auto flex p-[10%] items-center '>
      <img className='object-contain w-[50%] h-[100%] mr-10' src={`${product.image}`} alt="" />
      <div className='ml-10 mt-[7%] text-[1.3rem] px-[5%] py-[3%] bg-zinc-200 rounded-lg h-fit'>
        <h1 className='text-[2rem] font-semibold mb-7'>{product.title}</h1>
        <h2 className='text-[1.5rem] font-semibold mb-7 text-red-500'>$ {product.price}</h2>
        <p className='text-[1.5rem] font-semibold mb-7'>{product.description}</p>
        <h2 className='text-[1.5rem] font-semibold text-zinc-500 mb-7'>{product.category}</h2>
        <Link className='py-1 px-3 mr-5 border-[5px] border-blue-200 rounded-lg mb-3 font-semibold'>Edit</Link>
        <button onClick={() => productDeleteHandler(product.id)} className='py-1 px-3 border-[5px] border-red-200 rounded-lg mb-3 font-semibold'>Delete</button>
      </div>
      <div className='absolute -mt-[44vw]'>
        <Link to='/' class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-cyan-600 border-2 border-cyan-600 rounded-full hover:text-white group hover:bg-gray-50">
          <span class="absolute left-0 block w-full h-0 transition-all bg-cyan-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span class="relative">Go Back</span>
        </Link>
      </div>
    </div>
  ) : <Loading />
}

export default Details