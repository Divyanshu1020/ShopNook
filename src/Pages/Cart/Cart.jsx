import React from 'react'
import styled from 'styled-components'
import { useCart } from '../../context/cart.context'
import CartIsEmpty from './CartIsEmpty/CartIsEmpty'
import CartItems from './CartItems/CartItems'
import Summary from './Summary/Summary'


export default function Cart() {
    const { cart } = useCart()
    const container = cart.length === 0 ? <CartIsEmpty /> : <CartItems />
    const summary = cart.length === 0 ? null : <Summary />
    return (
        <>
            {container}
            {summary}

        </>

    )
}

