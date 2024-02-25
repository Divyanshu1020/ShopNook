import React, { useEffect } from 'react';
import { createContext, useContext, useState } from "react";
const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [cartUpdate, setCartUpdate] = useState()
    

    useEffect(() => {
        const timeout = setTimeout( ()=>{
            //* This prevents api call in fast loading
            if(cartUpdate){
                // Todo Make api call to backend to update user cart
            }
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