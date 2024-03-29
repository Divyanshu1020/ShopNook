import React from 'react'
import styled from 'styled-components'
import { useCart } from '../../../context/cart.context'
import useApi from '../../../hooks/useApi'
import ListComponent from './ListComponent'

export default function CartItems() {
    const { cart, setCart, setCartLength } = useCart()  //* cart context
    const { deleteCartItem } = useApi()
    const deleteCartItems = (index, id) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);

        deleteCartItem(id)
        setCartLength(pre => (pre - 1))
    }

    return (
        <Background >
            <Container>
                <h1>Shopping Cart</h1>
                <Container>
                    {cart.map((product, index) => (
                        <ListComponent
                            key={product.productId}
                            id={product.productId}
                            index={index}
                            description={product.productDetails.description}
                            price={product.productDetails.price}
                            thumbnail={product.productDetails.thumbnail}
                            quantity={product.productQuantity}
                            deleteCartItems={deleteCartItems}
                        />
                    ))}
                </Container>
            </Container>
        </Background>

    )
}

const Container = styled.div`

    /* border: 2px solid rgb(209, 214, 224); */
    border-radius: 0.5rem;
    margin-top: 1rem;
    
        
`

const Background = styled.div`
    width: calc(100% - 2rem);
    margin:  auto;
    background-color : white;
    border-radius: 0.7rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px;
    
    padding: 3rem 4rem;
    @media only screen and (max-width: 768px){
        padding: 1.5rem 2rem;
    }
    @media only screen and (max-width: 640px){
        width: calc(100% - 1rem);
    }
`