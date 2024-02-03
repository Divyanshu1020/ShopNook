import React from 'react'
import styled from 'styled-components'

export default function MFilter() {
    return (
        <Container>MFilter</Container>
    )
}

const Container = styled.div`
display: none;
    @media only screen and (max-width: 640px){
        display: block;
        border-radius:1rem;
        padding: 1rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;
        width: 100%;
        position: sticky;
        top: 0;
        background-color: white;
    }
    

`
