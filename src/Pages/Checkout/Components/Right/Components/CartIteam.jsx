import React from 'react'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function CartIteam() {
    return (
        <Container className='box'>
            <Image>
                <img src="https://media.everlane.com/images/c_fill,w_384,ar_4:5,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/b3cb3880_dec7/mens-organic-slim-fit-jean-thrift-blue" alt="" />
            </Image>
            <Ditails>
                <div className='ditail-top'>
                    <Link to="" className="title"><p>By providing your email, you agree to our Privacy Policy and Terms of Service. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, autem earum ex pariatur modi blanditiis commodi tenetur minima nisi recusandae hic incidunt optio soluta possimus ea doloribus consequatur voluptatum id!</p></Link>
                    <div className="delete-btn">
                        <MdDelete />
                    </div>
                </div>
                <div className='ditail-bottom'>
                    <div className="price">
                        <span className='actual-price'>₹ 8,614.54</span>
                        <span className='sell-price'>₹ 9,614.54</span>
                    </div>
                </div>
            </Ditails>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    padding: 0 1rem;    
`
const Image = styled.div`
    height: 120px;;
    img{
        max-height: 100%;
    }
`
const Ditails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.1rem 0;
    .ditail-top{
        padding: 0 1rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        .title{
            p{
                -webkit-line-clamp: 3;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                overflow: hidden;
                font-family: Maison Neue Book, Helvetica, Arial, sans-serif;
            }
        }
        .delete-btn{
            svg{
                height: 1.5em;
                width: 1.5em;
            }
        }
    }
    .ditail-bottom{
        padding: 0 1rem;
        display: flex;
        align-items: center;
        .price{
            color : #6b6b6b;
            font-size: 1rem;
            font-weight: 800;
            line-height: 32px;
            .actual-price{
                padding-right: 1rem;
                text-decoration: line-through;
                font-size: 0.8rem;
            }
        }
    }
`