import React from 'react'
import styled from 'styled-components'

export default function PromoCode() {
    return (
        <Container>
            <form>
                <input type="text" placeholder='Gift or promo code' />
                <button disabled={true}>APPLY</button>
            </form>
        </Container>
    )
}

const Container = styled.div`
    padding: 1rem;
    padding-bottom: 0;
    width: 100%;
    
    form{
        display: flex;
        input{
            width: 100%;
            padding: 0.7rem;
            border-style: none;
            background-color: #f0f0f0;
            &:focus{
                outline: 1px solid ;
            }
        }
        button{
            width: 100px;
            border : 1px solid;
        }
    }

`
