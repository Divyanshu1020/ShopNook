import React from 'react'
import styled from 'styled-components'

export default function CartSummery() {
    return (
        <Container>
            <div className='sub'>
                <p>Subtotal</p>
                <p>₹ 7560</p>
            </div>
            <div className='sub'>
                <p>Estimated Shipping</p>
                <p>₹ 7560</p>
            </div>
            <div className='sub'>
                <p>Estimated Tax</p>
                <p>₹ 7560</p>
            </div>
            <div className='sub total'>
                <p>Total</p>
                <p>₹ 10162.01</p>
            </div>
        </Container>
    )
}

const Container = styled.div`
    padding: 0 1rem 1rem 1rem ;
    .sub{
        display: flex;
        justify-content: space-between;
        line-height: calc(20 / 10* 1rem);
        font-size: 14px;
        letter-spacing: .02rem;
    }
    .total{
        font-weight: 700;
    }
`