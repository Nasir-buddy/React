import React, { createContext, useState } from 'react'

export const ProductContext = createContext();


function Context(props) {
    const [product, setProduct] = useState(null);
  return (
    <ProductContext.Provider value={[product, setProduct]}>{props.children}</ProductContext.Provider>
  )
}

export default Context