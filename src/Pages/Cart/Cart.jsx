import React from 'react'
import { MdClose } from 'react-icons/md'
import CartItems from './CartItems/CartItems'
import styled from 'styled-components'
export default function Cart({ setCartShow }) {

  return (
    <CartPage className='cart'>
      <Background className="opa" onClick={() => setCartShow(false)}></Background>
      <Main_Cart className="main-cart">
        <Header className="cart-header">
          <span className="heading">
            Shoping Cart
          </span>
          <span className="close-btn" onClick={() => setCartShow(false)}>
            <MdClose />
            <span className="text">Close</span>
          </span>
        </Header>

        {/* When cart is emitty then this will show */}
        {/* <Empty className="mt-cart">
          <BsCartX/>
          <span className="text">Your Cart is Empty</span>
        </Empty> */}

        <CartItems />

        <Footer className="cart-footer">
          <div className="subtotal">
            <span className="total">Subtotal:</span>
            <span className="total price">&#8377; 9999</span>
          </div>
          <div className="checkout">
            <button className="text">Checkout</button>
          </div>
        </Footer>
      </Main_Cart>
    </CartPage>
  )
}

const CartPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 999;
`
const Background = styled.div`
  background-color: rgba(0, 0 ,0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`
const Main_Cart = styled.div`
  background: white;
  height: 100%;
  width: 340px;
  position: relative;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  transform: translateX(100%);
  animation: cart 0.3s ease forwards;
  @keyframes cart {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
}
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 15px;
  border-bottom: 1px solid rgba(0,0,0,0.1);

  .heading{
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    flex-grow: 1;
  }

  .close-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;

    svg{
    font-size: 20px;
    color: rgb(255, 117, 117);
    transition: all ease 0.5s;
      &:hover{
      color: #ff0000;
      transform: scale(1.3);
      }
    }

    .text {
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 500;
      &:hover{
        opacity: 0.5;
      }
    }
  }
`
const Empty = styled.div`
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
const Footer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(0, 0 ,0, 0.1);

  .subtotal {
    display: flex;
    padding: 20px 15px;
    border-bottom: 1px solid rgba(0, 0 ,0, 0.1);
    justify-content: space-between;

    .total {
      font-size: 20px;
      font-weight: 600;
      text-transform: uppercase;
    }

    .price {
      color: #8e2be2;
    }
  }

  .checkout {
    padding: 20px 15px;

    .text {
    outline: 0;
    border: 0;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    cursor: pointer;
    background-color: #8e2be2;
    border-bottom: 3px solid #6516aa;
    }
  }


`