import React, { useEffect } from 'react'
import styled from 'styled-components'
import CartItems from './CartItems/CartItems'
import { useCart } from '../../context/cart.context'
import CartIsEmpty from './CartIsEmpty/CartIsEmpty'


export default function Cart() {
    const { cart } = useCart()
    useEffect(() => {
        window.scrollTo(0, 0,);
    }, [])
    return (

        <Background >
        
            { cart.length == 0? (<CartIsEmpty/>):
            (<Container>
                <h1>Shopping Cart</h1>
                <CartItems/>
            </Container>)}

        </Background>
    )
}

const Background = styled.div`
    min-height: 500px;
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
const Container = styled.div`

`