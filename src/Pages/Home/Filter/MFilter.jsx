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
    width: 100%;
    height: 200px;
   width: 100%;
    /* margin: 1rem; */
    position: sticky;
    top: 0;
    background-color: white;
    }
    

`
