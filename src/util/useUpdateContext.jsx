import React from 'react'
import { useUser } from '../context/user.context';
import { useCart } from '../context/cart.context';
import { useNavigate } from 'react-router-dom';

export default function useUpdateContext() {

    const { cart, setCart, setCartUpdate, setCartLength } = useCart();
    const { user } = useUser();

    const navigate = useNavigate();

    const updateCart = function (newItem) {

        if (!user) {
            alert("Please login first");
            navigate("/login");
            return;
        }


        //* check if the product is already in the cart
        const existingProduct = cart.find(item => (item?.productId === newItem.productId));

        if (existingProduct) {
            setCart(preProducts => (
                preProducts.map(
                    item => {
                        if (item.productId === newItem.productId) {
                            const newQuantity = item.productQuantity + 1;
                            setCartUpdate({ id: newItem.productId, quantity: newQuantity })
                            return item.productId === newItem.productId ? { ...item, productQuantity: newQuantity } : item
                        }
                    }
                )
            ))
        } else {
            //* Add new product in cartContext
            setCart(preProducts => ([...preProducts, newItem]));
            setCartLength(pre => (pre + 1))
            setCartUpdate({ id: newItem.productId, quantity: 1 })
        }
    }

    const updateWishlist = ( ) => {
    
    }

    return { updateCart, updateWishlist }
}
