import React from 'react'
import styled from 'styled-components'
import ListComponent from './ListComponent'
import { useCart } from '../../../context/cart.context'

export default function CartItems() {
    const { cart } = useCart();
    return (
        <Container>
            {cart.map((product) => (
                <ListComponent
                    key={product.id}
                    title={product.description}
                    price={product.price}
                    thumbnail={product.thumbnail}
                    quantity={product.quantity}

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