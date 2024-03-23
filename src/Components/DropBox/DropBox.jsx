import React from 'react';
import { BiCart, BiLike } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';

import { GrNext } from "react-icons/gr";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function DropBox() {
    return (
        <Container className="user-dropdown-content" >
            <div className='avatar'>
                <div className='avatar-img'>
                    <img src="../../../../../OIP.jpg" />
                </div>
                <h4>UserName</h4>
            </div>
            <div className='separator'>
            </div>
            <div className="link">
                <FaRegUser className='link-lift' />
                <Link to='' >
                    Profile
                </Link>
                <GrNext className='next' />
            </div>
            <div className="link">
                <BiLike className='link-lift' />
                <Link to='' >
                    Wishlist
                </Link>
                <GrNext className='next' />
            </div>
            <div className="link">
                <FaRegUser className='link-lift' />
                <Link to='' >
                    Order
                </Link>
                <GrNext className='next' />
            </div>
            <div className="link">
                <BiCart className='link-lift' />
                <Link to='' >
                    Cart
                </Link>
                <GrNext className='next' />
            </div>

        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    padding: 0.6rem 0.3rem;
    top: 3rem;
    right: 5%;
    /* left: 10%; */
    overflow: auto;
    width: 200px;
    border-radius: 0.7rem;
    background-color: #ffffff;
    box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.4);
    display: none;
    flex-direction: column;
    gap: 0.3rem;
    .link{
        display: flex;
        align-items: center;
        width: 100%;
        cursor: pointer;
        padding: 0.5rem 0.7rem;
        border-radius: 0.5rem;
        .link-lift{
            color: black;
            margin-right : 0.5rem;
        }
        a {
            color: #080000;
            text-decoration: none;
        }
        &:hover{
            color: #000000;
            background: rgba(0, 0, 0, 0.08);
        }
        .next{
            margin-left: auto;
        }
    }
    

    .avatar{
        display: flex;
        flex-direction: column;
        align-items: center;
        .avatar-img{
            cursor: pointer;
            height: 50px;
            width: 50px;
            background: #F4F4F4;
            border-radius: 50%;
            position: relative;
            img{
                max-width: 100%;
                max-height: 100%;
                display: inline-block;
                border-radius: 50%;
                border: 1px solid rgba(0, 0, 0, 0.18);
            }
        }    
    }
    h4{
        color: black;
        padding: 0.3rem;
        cursor: pointer;
    }
    .separator{
      height: 1px;
      width: calc(100% - 0.15rem);
      background-color: rgb(209, 214, 224);
    }
    
`