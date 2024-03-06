import axios from 'axios';
import React, { useState } from 'react'

function Show() {
    const [product, setProductData] = useState([]);
    // Data fetching function 
    const getapi = () => {
        const api = 'https://fakestoreapi.com/products';
        axios
            .get(api)
            .then((product) => {
                setProductData(product.data);
            })
            .catch((error) => console.log(error));
    }
    // Data posting function \

    const postapi = () => {
        const api = 'https://fakestoreapi.com/products';
        axios.post(api, {
            title: 'Nasir Ali',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => console.log(error));
    }
    console.log(product);
    return (
        <>
            <div className='p-4 flex gap-3'>
                <button onClick={getapi} className='px-2 py-3 bg-red-300 rounded-md'>Call API</button>
                <button onClick={postapi} className='px-2 py-3 bg-red-300 rounded-md'>Add data to API</button>
            </div>
            <hr className='my-10' />
            <ul className='my-10 p-5'>
                {product.length > 0 ?
                    product.map((p) => (
                        <li key={p.id} className='px-2 py-3 bg-red-200 mb-3 rounded-md pb-5'>{p.title}</li>
                    )) : <h1>Loading...</h1>}
            </ul>
        </>
    )
}

export default Show