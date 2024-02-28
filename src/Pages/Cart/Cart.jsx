import React, {useEffect} from 'react'
import styled from 'styled-components'
import { useCart } from '../../context/cart.context'
import CartIsEmpty from './CartIsEmpty/CartIsEmpty'
import CartItems from './CartItems/CartItems'
import Summary from './Summary/Summary'
import axios from 'axios'


export default function Cart() {
    const { cartLength, setCart } = useCart()
    const container = cartLength === 0 ? <CartIsEmpty /> : <CartItems />
    const summary = cartLength === 0 ? null : <Summary />

    useEffect(() => {

        const fatchCartData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/v1/users/getCart", { withCredentials: true })
                setCart(response.data.data[0].cart)
            } catch (error) {
                console.log("Error is produced when fetching product", error);
            }
        }
        
        if (cartLength !== 0) fatchCartData()
        

    }, [])

    return (
        <>
            {container}
            {summary}

        </>

    )
}

