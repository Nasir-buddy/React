import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'

function Services() {
    const [first, setFirst] = useState("This is normal data");
    const [second, setSecond] = useState("This is very large data");

    const getusers = () => {
        const api = '/users';
        axios
            .get(api)
            .then((users) => {
                // setProductData(product.data);
                console.log(users)
            })
            .catch((error) => console.log(error));
    }

    useEffect(()=>{
        getusers();
        console.log("Service component is created");
        return ()=>{
            console.log("Service component is destroyed");
        }
    },[second]);
  return (
    <div>
        <h1>{first}</h1>
        <button onClick={()=>setFirst("normal data has been changed")} className='bg-red-200 rounded-md px-3 py-1 mb-2 mt-2'>Change Normal Data</button>

        <h1>{second}</h1>
        <button onClick={()=>setSecond("large data has been changed")} className='bg-red-200 rounded-md px-3 py-1 mb-2 mt-2'>Change large Data</button>
    </div>
  )
}

export default Services