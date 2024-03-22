import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import useApi from '../hooks/useApi';

const ProductContext = createContext([]);

const ProductProvider = ({ children }) => {
    const { fatchAllProducts } = useApi();
    const [productList, setProductList] = useState([]);
    // const [queryProductList, setQueryProductList] = useState([]);
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState({})
    const initialRender = useRef(true);

    const fatchProductWithQuery = async () => {
        fatchAllProducts(page, query)
        .then((response) => {
            setProductList(response)
        })

        //* This help when user can choice two or more filters
        // fatchAllProducts(page, query)
        // .then((response) => {
        //     setQueryProductList((prevList) => [...prevList, ...response]);
        //     setProductList([...queryProductList, ...response])
        // })
    }

    useEffect(() => {

        if (!initialRender.current) {
            fatchProductWithQuery()
        } else {
            initialRender.current = false;
        }


    }, [query]);


    return (
        <ProductContext.Provider value={{ productList, setProductList, page, setPage, query, setQuery }}>
            {children}
        </ProductContext.Provider>
    )
}

const useProductList = () => useContext(ProductContext)
export { ProductProvider, useProductList }