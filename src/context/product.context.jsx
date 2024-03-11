import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import useApi from '../util/useApi';

const ProductContext = createContext([]);

const ProductProvider = ({ children }) => {

    const [productList, setProductList] = useState([]);
    const [page, setPage] = useState(1)
    
    
    return (
        <ProductContext.Provider value={{ productList, setProductList, page, setPage }}>
            {children}
        </ProductContext.Provider>
    )
}

const useProductList = () => useContext(ProductContext)
export { ProductProvider, useProductList }