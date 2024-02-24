import React, { useEffect } from 'react';
import { createContext, useContext, useState } from "react";
const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [cartUpdate, setCartUpdate] = useState()
    

    useEffect(() => {
        const timeout = setTimeout( ()=>{
            if(cartUpdate) console.log("api call", cartUpdate);
        },1000)
        return ()=> clearTimeout(timeout);

    }, [cartUpdate])

    return (
        <CartContext.Provider value={{ cart, setCart, setCartUpdate }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);
export { CartProvider, useCart }