import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom';
import { ProductContext } from '../context/Context';

function Edit() {
    const [products, setProducts] = useContext(ProductContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({
        title: "",
        description: "",
        price: "",
        category: "",
        image: ""
    });

    const changeHandler = (e) => {
        // console.log(e.target.name, e.target.value);

        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        setProduct(products.filter((p) => p.id == id)[0]);
    }, [id])
    // console.log(product);

    const addProductHandler = (e) => {
        e.preventDefault();
        if (
            product.title.trim().length < 5 ||
            product.description.trim().length < 5 ||
            product.price.trim().length < 1 ||
            product.category.trim().length < 5 ||
            product.image.trim().length < 5) {
            alert("Every feild should be filled with data.");
            return;
        }

        const pi = products.findIndex((p) => p.id == id);

        //coping the whole data in copy data 

        const copyData = [...products];

        // storing the copied data and changing the original data. 
        copyData[pi] = { ...product[pi], ...product }

        console.log(copyData)
        setProducts(copyData);
        localStorage.setItem("products", JSON.stringify(copyData));
        navigate(-1);
    };

    console.log(products);
    return (
        <div onClick={addProductHandler} className='h-full w-full flex p-5 justify-center'>
            <form class="w-1/2 mt-[5%]">
                <h1 className='mb-10 w-fit py-3 px-5 border border-blue-200 rounded-md  text-blue-500 font-semibold'>Edit Product</h1>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="url"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=""
                        name='image'
                        onChange={changeHandler}
                        value={product && product.image}
                    />
                    <label for="url" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Image Link</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="title"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        name='title'
                        onChange={changeHandler}
                        value={product && product.title}
                    />
                    <label for="title" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Title</label>
                </div>

                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="category"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            name='category'
                            onChange={changeHandler}
                            value={product && product.category}
                        />
                        <label for="category" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Category</label>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="Price"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            name='price'
                            onChange={changeHandler}
                            value={product && product.price}
                        />
                        <label for="Price" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Price</label>
                    </div>
                </div>
                <div class="">
                    <div class="relative z-0 w-full mb-5 group">
                        <textarea

                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=""
                            cols="30" rows="10"
                            name='description'
                            onChange={changeHandler}
                            value={product && product.description}
                        ></textarea>
                        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                    </div>

                </div>
                <div className='w-1/2 flex gap-5'>
                    <button type='submit' class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                        <span class="w-48 h-48 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Added Product</span>
                    </button>
                    <Link to='/' class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-cyan-600 border-2 border-cyan-600 rounded-full hover:text-white group hover:bg-gray-50">
                        <span class="absolute left-0 block w-full h-0 transition-all bg-cyan-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="relative">Go Back</span>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Edit