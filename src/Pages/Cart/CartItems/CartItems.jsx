import React from 'react'
import styled from 'styled-components'
import ListComponent from './ListComponent'
import { useCart } from '../../../context/cart.context'

export default function CartItems() {
    const {cart, setCart} = useCart()
    const deleteCartItems = (id) =>{
      const updatedCart = cart.filter(item => item.id !== id);
      setCart(updatedCart)
    }
    return (
        <Container>
            {cart.map((product) => (
                <ListComponent
                    key={product.id}
                    id={product.id}
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