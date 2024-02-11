import React from 'react'
import CartItem from './CartItem/CartItem'
import styled from 'styled-components'
import { useCart } from '../../../../context/cart.context'

export default function CartItems() {
  const {cart, setCart} = useCart()
  const deleteCartItems = (id) =>{
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart)
  }
  return (
    <Items>
        {cart.map((product)=>(
          <CartItem
            key={product.id}
            id={product.id}
            title={product.title}
            thumbnail={product.thumbnail}
            price={product.price}
            quantity={product.quantity}
            deleteCartItems={deleteCartItems}
          />    
        ))}    
    </Items>
  )
}

const Items = styled.div`
  overflow: auto;
  &::-webkit-scrollbar{
    display: none;
  }
`
