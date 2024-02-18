import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useCart } from '../../../context/cart.context'

export default function Summary() {
    const [subtotal, setSubtotal] = useState(0);
    const { cart } = useCart();
    useEffect(() => {
        let subtotal = 0;
        cart.map((item) => {
            subtotal = subtotal + (item.price * item.quantity)
        })
        setSubtotal(Number(subtotal.toFixed(2)))

    }, [cart])

    return (
        <Background>
            <h1>Summary</h1>
            <Container>
                <div className='total'>
                    <h2>Subtotal</h2>
                    <h3>{subtotal}</h3>
                </div>
                <div className='total'>
                    <h2>Quantity</h2>
                    <h3>123456</h3>
                </div>
            </Container>
        </Background>
    )
}

const Background = styled.div`
    
    width: calc(100% - 2rem);
    margin: 0 auto;
    margin-top: 1rem;
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
    margin-top: 1rem;
    .total{
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        h3{
            font-weight: 100;
        }
    }
`