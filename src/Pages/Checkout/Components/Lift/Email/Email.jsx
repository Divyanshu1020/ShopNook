import React from 'react'
import styled from 'styled-components'
import { IoMdCheckmark } from "react-icons/io";

export default function Email() {
    return (
        <Container className="box">
            <div className='email-header'>
                <div className='email-header-no'>
                    <IoMdCheckmark />
                </div>
                <div className='email-header-title'>
                    Your Email
                </div>
            </div>
            <div className='default'>
                <p>divyanshu8866@gmail.com</p>
            </div>
        </Container>
    )
}

const Container = styled.div`
    padding: 4rem;
    .email-header{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin: 0 0 10px;
        width: 100%;
        .email-header-no{
            border: 1px solid green;
            border-radius: 50%;
            display: flex;
            height: 26px;
            justify-content: center;
            align-items: center;
            margin-right: 12px;
            width: 26px;
            background-color: green;
            color : white;
        }
        .email-header-title{
            font-size: 18px;
            font-weight: 200;
        }
    }
    .default{
        padding-left: 40px;
        p{
            font-size: 16px;
            letter-spacing: .02rem;
            line-height: calc(20 / 10* 1rem);
            font-family: Maison Neue Book, Helvetica, Arial, sans-serif;
            color: #4d4d4d;
        }
    }
`
