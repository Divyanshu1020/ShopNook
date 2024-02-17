import React from 'react'
import styled from 'styled-components'
import { useCart } from '../../../context/cart.context'
import ListComponent from './ListComponent'

export default function CartItems() {
    const { cart, setCart } = useCart()  //* cart context
    const deleteCartItems = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
    }

return (
    <Container>
        {cart.map((product, index) => (
            <ListComponent
                key={product.id}
                id={product.id}
                index={index}
                title={product.description}
                price={product.price}
                thumbnail={product.thumbnail}
                quantity={product.quantity}
                deleteCartItems={deleteCartItems}
            />
        ))}
    </Container>
)
}

const Container = styled.div`

    /* border: 2px solid rgb(209, 214, 224); */
    border-radius: 0.5rem;
    margin-top: 1rem;
    
        
`