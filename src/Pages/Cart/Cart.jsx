import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useCart } from '../../context/cart.context'
import CartIsEmpty from './CartIsEmpty/CartIsEmpty'
import CartItems from './CartItems/CartItems'
import Summary from './Summary/Summary'
import axios from 'axios'
import useApi from '../../util/useApi'


export default function Cart() {
    const { cartLength, setCart, cart } = useCart()
    const container = cartLength === 0 ? <CartIsEmpty /> : <CartItems />
    const summary = cartLength === 0 ? null : <Summary />
    const { fatchCartData } = useApi();

    useEffect(() => {

        

        const fetchData = async () => {
            const response = await fatchCartData();
            console.log(response);
            if (response) {
                setCart(response);
            }
        }

  
        if ( cartLength > cart.length ) fetchData();
    }, [])

    return (
        <>
            {container}
            {summary}

        </>

    )
}

