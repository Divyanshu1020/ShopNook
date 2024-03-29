import React from 'react'
import styled from 'styled-components'
import Email from './Email/Email'

export default function Lift() {
    return (
        <Container>
            <Email/>
            <div className="box">1</div>
            <div className="box">1</div>
        </Container>
    )
}

const Container = styled.div`
    width: 70%;
    overflow-x: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    &::-webkit-scrollbar{
        display: none;
    }
    .box{
        border-radius: 0.7rem;
        background-color: white;
    }
`
