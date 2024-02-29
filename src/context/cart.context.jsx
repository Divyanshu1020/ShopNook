import React, { useEffect } from 'react';
import { createContext, useContext, useState } from "react";
import useApi from '../util/useApi';
const CartContext = createContext(null)

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [cartUpdate, setCartUpdate] = useState()
    const [cartLength, setCartLength] = useState(0);

    const { cartUpdateApi } = useApi();

    useEffect(() => {
        //* This prevents api call in fast loading
        const timeout = setTimeout(async() => {
            cartUpdateApi(cartUpdate);
        }, 1000)
        return () => clearTimeout(timeout);

    }, [cartUpdate, cartUpdateApi])

    return (
        <CartContext.Provider value={{ cart, setCart, setCartUpdate, cartLength, setCartLength }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);
export { CartProvider, useCart }