import React from 'react'
import { BsCartX } from 'react-icons/bs'
import styled from 'styled-components'

export default function CartIsEmpty() {
    return (
        <Empty className="mt-cart">
            <BsCartX/>
            <span className="text">Your Cart is Empty</span>
        </Empty>
    )
}
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