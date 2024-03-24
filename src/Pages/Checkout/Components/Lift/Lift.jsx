import React from 'react'
import styled from 'styled-components'

export default function Lift() {
    return (
        <Container>
            <div className="box">1</div>
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
        min-height: 200px;
        background-color: white;
    }
`
