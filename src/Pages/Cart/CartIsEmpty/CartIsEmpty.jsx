import React from 'react'
import { BsCartX } from 'react-icons/bs'
import styled from 'styled-components'

export default function CartIsEmpty() {
    return (
      <Background >
        <Empty className="mt-cart">
            <BsCartX/>
            <span className="text">Your Cart is Empty</span>
        </Empty>
      </Background>
    )
}

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
const Empty = styled.div`
    height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin : auto 0;

  svg {
    font-size: 100px;
    opacity: 0.1;
  }

  .text{
    font-size: 35px;
    font-weight: 600;
    opacity: 0.1;
  }
`