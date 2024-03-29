import React, { useEffect, useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import styled from 'styled-components';
import { useCart } from '../../../context/cart.context';
import { convertInPricrFormate } from '../../../helper/convertInPriceFormat';
import { Link } from 'react-router-dom';

export default function ListComponent(props) {
    const { description, price, thumbnail, quantity, deleteCartItems, id, index } = props;
    const { setCart, setCartUpdate } = useCart()
    const [total, setTotal] = useState('')
    const [productQuantity, setProductQuantity] = useState(quantity)
    const [userProductQuantityInput, setUserProductQuantityInput] = useState(quantity)

    useEffect(() => {
        const priceFormate = convertInPricrFormate(productQuantity * price);
        setTotal(priceFormate)

        //* This update product quantity in cart context and data base
        const timeout = setTimeout(() => {
            setCart((pre) => (
                pre.map((item) => (
                    item.productId === id ? { ...item, productQuantity: productQuantity } : item
                ))
            ))

            setCartUpdate({ id: id, quantity: productQuantity })
    }, 1000)

    return () => clearTimeout(timeout)
}, [productQuantity, price, setCart, id])

//* Handler for submite product quantity
const submiteProductQuantity = (e) => {
    e.preventDefault();
    setProductQuantity(userProductQuantityInput);
}

//* Handler for (-) Minus product quantity
const minusProductQuantity = () => {
    setProductQuantity((pre) => (pre - 1))
    setUserProductQuantityInput((pre) => (pre - 1))
}

//* Handler for (+) plus product quantity
const plusProductQuantity = () => {
    setProductQuantity((pre) => (pre + 1))
    setUserProductQuantityInput((pre) => (pre + 1))
}

return (
    <Container>
        <Lift>
            <div className='image'>
                <img src={thumbnail} alt="" />
            </div>
            <div className="title">
                <Link to={`/product/${id}`}><h4 className='name'>{description}</h4></Link>
                <h3 className='price'>{convertInPricrFormate(price)}</h3>
            </div>
        </Lift>
        <Right>
            <div className="quantity ">
                <span><FaMinus onClick={() => { minusProductQuantity() }} /></span>
                <form onSubmit={(e) => { submiteProductQuantity(e) }}><input
                    type="text"
                    value={userProductQuantityInput}
                    onChange={(e) => { setUserProductQuantityInput(e.target.value) }}
                    onBlur={() => { setUserProductQuantityInput(productQuantity) }}
                />
                </form>
                <span><FaPlus onClick={() => { plusProductQuantity() }} /></span>
            </div>

            <div className="price">
                <span >{total}</span>
            </div>
            <div>
                <MdDelete className='delete' onClick={() => { deleteCartItems(index, id) }} />
            </div>
        </Right>

    </Container>
)
}
const Container = styled.div`
    border-bottom:  2px solid rgb(209, 214, 224);
    display: flex;
    justify-content: space-between;
    padding: 2rem 1rem;
    ;
    @media only screen and (max-width: 768px){
        flex-direction: column;
        padding: 1rem .5rem;
        gap: 2rem;
    }
`
const Lift = styled.div` 
    display: flex;
    max-width: 700px;
    .image{
        height: 100px;
        margin-right: 2rem;

        img{
            height: 100%;
            display: block;
        }
    }
    .title{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        a{
            color: inherit !important;
            text-decoration : none
        }
    }
    .name{
        font-size: 20px; 
        font-weight: 100;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        
        
    }
    .price{
        color : #6b6b6b;
        font-size: 25px;
        font-weight: 800;
        line-height: 32px;
        margin: 0.5rem  0;
    }
`
const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 768px){
        justify-content: start;
    }
    .quantity{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 2rem;
        @media only screen and (max-width: 768px){
            padding-left: 0;
        }
        span{
            
            font-weight: 600;
            font-size: 20px;
            width: 30px;
            display: flex;
            align-items: center; 
            justify-content: center;
            cursor: pointer;
            color: #6b6b6b;
        }
        input{
            display: flex;
            align-items: center; 
            justify-content: center;
            width: 2.1rem;
            text-align: center;
            height: 1.5rem;
            margin: auto .5rem;
            font-size: .875rem;
            line-height: 1.25rem;
            padding-left: .5rem;
            padding-right: .5rem;
            border-radius: 0.25rem;
            border: 1px solid #6b6b6b;
            
            &:focus{
                outline: none;
            }
        }

        

        
        
        
    }
    .price{
        span{
            font-weight: 900;
            font-size: 1.3rem;
            line-height: 1rem;
            padding-right: 2rem;
            min-width: 5rem;
        }
    }
    .delete{
        color: #6b6b6b;
        cursor: pointer;
        font-size: 20px;
        transition: all ease 0.5s;
        &:hover{
            color: #ff0000;
            transform: scale(1.3);
        }
    }
`


