import React, { createContext, useContext, useEffect, useState } from 'react'

const ProductContext = createContext([]);

const ProductProvider = ({ children }) => {

    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useState({
        page: 1,
        categorie: "",
        brand: "",
    });
    useEffect(() => {

        console.log("query is runing")

      },[query])
    
    return (
        <ProductContext.Provider value={{ productList, setProductList, query, setQuery }}>
            {children}
        </ProductContext.Provider>
    )
}

const useProductList = () => useContext(ProductContext)
export { ProductProvider, useProductList }