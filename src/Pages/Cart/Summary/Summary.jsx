import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useCart } from '../../../context/cart.context';
import { convertInPricrFormate } from '../../../helper/convertInPriceFormat';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';

export default function Summary() {
    const [subtotal, setSubtotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const { cart } = useCart();
    useEffect(() => {
        let subtotal = 0;
        let totalItems = 0;
        cart.map((item) => {
            subtotal = subtotal + (item.price * item.quantity)
            totalItems = totalItems + item.quantity;
        })
        setSubtotal(convertInPricrFormate(Number(subtotal.toFixed(2))))
        setTotalItems(totalItems)

    }, [cart])

    return (
        <Background>
            <h1>Summary</h1>
            <Container>
                <div className='total'>
                    <h2>Subtotal</h2>
                    <h3>{subtotal}</h3>
                </div>
                <div className='total'>
                    <h2>Quantity</h2>
                    <h3>{totalItems}</h3>
                </div>
                <div className="outButtons">
                    <div className='ContinueShopping' >
                        <Link to='/' >
                            <IoIosArrowRoundBack className='arrow' /> Continue Shopping
                        </Link>
                    </div>
                    <div className='checkout'>
                        <button>CheckOut</button>
                    </div>
                </div>
            </Container>
        </Background>
    )
}

const Background = styled.div`
    
    width: calc(100% - 2rem);
    margin: 0 auto;
    margin-top: 1rem;
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
const Container = styled.div`
    margin-top: 1rem;
    .total{
        margin: 1rem ;
        display: flex;
        justify-content: space-between;
        h2{
            font-weight: 300;
        }
        h3{
            font-weight: 100;
        }
    }
    .outButtons{
        margin: 1rem;
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        position: relative;
        .ContinueShopping{
            margin: 20px 0;
            .arrow{
           height : 50px;
           width: 50px;
           position: absolute;
            left: -50px;
           
            }
            a{
                display: flex;
                align-items: center;
                text-decoration: none;
                color: #878787;
                font-size: 25px;
            }
        }
        .checkout{
            button{
                border-radius: 0.4rem;
                outline: 0;
                border: 3px solid #8e2dec;
                height: 50px;
                width: 222px;
                font-size: 16px;
                font-weight: 800;
                color: white;
                background-color: #8e2dec;
                cursor: pointer;
                &:hover {
                    opacity: 0.8;
                }
            }
        }
        
    }
`