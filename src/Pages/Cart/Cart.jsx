import React, { useEffect } from 'react'
import { useCart } from '../../context/cart.context'
import useApi from '../../hooks/useApi'
import CartIsEmpty from './CartIsEmpty/CartIsEmpty'
import CartItems from './CartItems/CartItems'
import Summary from './Summary/Summary'


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
        if (cartLength > cart.length) fetchData();
    }, [])

    return (
        <>
            {container}
            {summary}

        </>

    )
}

