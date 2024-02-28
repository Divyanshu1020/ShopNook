import axios from 'axios';
import React, { useEffect } from 'react';
import { createContext, useContext, useState } from "react";
const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [cartUpdate, setCartUpdate] = useState()
    const [cartLength, setCartLength] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(async() => {
            //* This prevents api call in fast loading
            if (cartUpdate) {
                try {
                    const response = await axios.post("http://localhost:8000/api/v1/users/updateCart", cartUpdate, {withCredentials: true}  );
                    console.log(response);
                } catch (err) {
                    console.error("Error fetching current user:", err);
                }
            }
        }, 1000)
        return () => clearTimeout(timeout);

    }, [cartUpdate])

    return (
        <CartContext.Provider value={{ cart, setCart, setCartUpdate, cartLength, setCartLength }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);
export { CartProvider, useCart }