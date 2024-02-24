import React, { useEffect } from 'react';
import { createContext, useContext, useState } from "react";
const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [update, setUpdate] = useState()

    useEffect(() => {
        const timeout = setTimeout( ()=>{
            if(update) console.log("api call", update);
        },1000)
        return ()=> clearTimeout(timeout);

    }, [update])

    return (
        <CartContext.Provider value={{ cart, setCart, update, setUpdate }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);
export { CartProvider, useCart }