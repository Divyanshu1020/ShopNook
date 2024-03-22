import React, { useEffect, useRef } from 'react';
import { createContext, useContext, useState } from "react";
import useApi from '../hooks/useApi';
const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [cartUpdate, setCartUpdate] = useState()
    const [cartLength, setCartLength] = useState(0);
    const initialRender = useRef(true);
    const { cartUpdateApi } = useApi();

    useEffect(() => {
        //* This prevents api call in fast loading
        if (!initialRender.current) {
            const timeout = setTimeout(async () => {
                cartUpdateApi(cartUpdate);
            }, 1000)
            return () => clearTimeout(timeout);
        } else {
            initialRender.current = false;
        }

    }, [cartUpdate, cartUpdateApi])

    return (
        <CartContext.Provider value={{ cart, setCart, setCartUpdate, cartLength, setCartLength }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);
export { CartProvider, useCart }