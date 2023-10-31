import React from 'react'
import { MdClose } from 'react-icons/md'
import styled from 'styled-components'
import card from '../../../../assets/products/earbuds-prod-1.webp'

export default function CartItem() {
  return (
    <Cartitem>
      <div className="cartItem-img">
        <img src={card} alt="" />
      </div>
      <div className="cartItem-details">
        <span className='cartItem-name'>Hadephon</span>
        <MdClose className='close-btn' />
        <QuantityButton>
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </QuantityButton>
        <div className="text">
          <span>1</span>
          <span>X</span>
          <span className="cartItem-price">&#8377; 9500</span>
        </div>
      </div>
    </Cartitem>
  )
}



const Cartitem = styled.div`

  display: flex;
  padding: 20px 15px;
  gap: 10px;
  &:hover{
    background-color:  rgba(0, 0 ,0, 0.05) ;
  }

  .cartItem-img{
    height: 60px;width: 60px;
    background-color: rgba(0, 0 ,0, 0.1);
    flex-shrink: 0;
    img{
      height: 100%;
      width: 100%;
    }
  }

  .cartItem-details{
    position: relative;
    overflow: hidden;
    width: 100%;

    .cartItem-name{
      font-size: 14px;
      font-weight: 600;
      
      width: calc(240px - 25px);
      text-overflow: ellipsis;
      white-space: nowrap;
      /* overflow: hidden; */
      line-height: 1;
      padding-right: 25px;
      margin-bottom: 10px;
    }

    svg {
      position: absolute;
      top: 0;
      right:  0;
    }

    .text {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 12px;
      font-weight: 600;
      .cartItem-price {
        color: #8e2be2;
      }
    }
  }
}
`
const QuantityButton = styled.div`
  display: flex;
  width: fit-content;
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 30px;

  span{
    font-size: 14px;
    width: 30px;
    display: flex;
    align-items: center; 
    justify-content: center;
    cursor: pointer;
    color: #6b6b6b;

    &:nth-child(1){
      border-right: 2px solid rgba(0, 0, 0, 0.2);
    }
    &:nth-child(2){
    width: 40px;
    }
    &:nth-child(3){
    border-left: 2px solid rgba(0, 0, 0, 0.2);
    }  
  }
`


