import React from 'react'
import styled from 'styled-components'
import { useCart } from '../../context/cart.context'
import CartIsEmpty from './CartIsEmpty/CartIsEmpty'
import CartItems from './CartItems/CartItems'


export default function Cart() {
    const { cart } = useCart()
    const Container = cart.length === 0 ? <CartIsEmpty /> : <CartItems />
    return (
        <>
            {Container}
            
        </>

    )
}

