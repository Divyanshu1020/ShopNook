import React from 'react'
import Lift from './Components/Lift/Lift'
import Right from './Components/Right/Right'
import styled from 'styled-components'

export default function Checkout() {
    return (
        <Container>
            <Lift />
            <Right />
        </Container>

    )
}

const Container = styled.div`
    height: 80lvh;
    width: calc(100% - 2rem);
    border-radius: 0.7rem;
    margin: 0 auto;
    display: flex;
    gap: 1rem;
`
