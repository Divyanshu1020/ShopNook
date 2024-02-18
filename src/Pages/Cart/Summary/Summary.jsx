import React from 'react'
import styled from 'styled-components'

export default function Summary() {
    return (
        <Background><h1>Summary</h1></Background>
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