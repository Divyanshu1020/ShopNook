import React from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import Product from './Product/Product'

export default function Search({setSearchShow}) {
  return (
    <Search_Page>
        <Search_Bar>
            <input 
                type="text" 
                autoFocus
                placeholder='Search Product Here' 
            />
            <MdClose onClick={()=>setSearchShow(false)}/>
        </Search_Bar>
        <Result_Container>
            <div className='results' >
                <Product/>
                <Product/>
            </div>
        </Result_Container>
    </Search_Page>
  )
}

const Search_Page = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: white;
    transform: translateY(-100%);
    z-index: 999;
    animation: cart 0.3s ease forwards;
    @keyframes cart {
        0% {
            transform: translateY(-100%);
        }
        100% {
            transform: translateY(0);
        }
    }
`
const Search_Bar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding : 20px 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    position: relative;

    @media only screen and (max-width: 640px){
        padding: 10px 50px;
    }

    input {
        width: 100%;
        max-width: 1200px;
        padding: 10px 20px;
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 10px;
        outline: none;
        font-size: 20px;
        font-weight: 600;
        text-transform: uppercase;
        color: rgba(0,0,0,0.8);
        background: white;
        transition: all 0.3s ease;
        text-align: center;

        &:focus {
            border: 1px solid rgba(0,0,0,0.2);
        }
    }

    svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;
        font-size: 40px;
        color: rgba(0,0,0,0.5);
        cursor: pointer;
    }
    

`
const Result_Container = styled.div`
    width: 100%;
    .results{
        width: 100%;
        max-width: 800px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 auto;
        padding: 20px 0;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        position: relative;
        overflow: auto;

        
    }

`