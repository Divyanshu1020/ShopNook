import React from 'react'
import { BiCart } from 'react-icons/bi'
import styled from 'styled-components'
import CartIteam from './Components/CartIteam'
import CartSummery from './Components/CartSummery'
import PromoCode from './Components/PromoCode'

export default function Right() {
    return (
        <Container>
            <div className="top">
                <div className="title">
                    <BiCart />
                    {"Cart (5)"}
                </div>
                <div className="price">
                    ₹ 80,614.54
                </div>
            </div>
            <div className="items">
                <div className='separator'></div>
                <CartIteam />
                <CartIteam />
                <CartIteam />
                <CartIteam />
                <CartIteam />
                <CartIteam />
                <CartIteam />
                <CartIteam />
                <CartIteam />
                <PromoCode />
                <div className='separator'></div>
                <CartSummery />
            </div>

            <div className="btn" >
                <button disabled={true}>PLACE ORDER</button>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    border-radius: 0.7rem;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px 0px;
    .top{
        padding: 2rem 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title{
            display: flex;
            align-items: center;
            gap: 1rem;
            svg{
                height: 2em;
                width: 2em;
            }
        }
    }
    .items{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        overflow: auto;
        &::-webkit-scrollbar{
            display: none;
        }
        .summery{
            height: 100px;
            background-color: #737373;
        }
        .separator{
            min-height: 1px;
            width: calc(100% - 2rem);
            margin: 0 auto;
            background-color: rgb(209, 214, 224);
        }
    }
    
    .btn{
        padding: 1rem;
        margin-top: auto;
        box-shadow: rgba(0, 0, 0, 0.25) 0px -5px 20px 0px;
        button{
            width: 100%;
            border: none;
            padding: 1rem 2rem;
            text-align: center;
            color: white;
            background-color: #8e2dec;
            border-radius: 0.3rem;
            cursor: pointer;
        }
    }
    .close{
        color: #737373;
        background-color: #e1e0e0;
    }
`