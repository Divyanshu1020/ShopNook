import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { convertInPricrFormate } from '../../../../helper/convertInPriceFormat';
import { MdDelete } from 'react-icons/md';
import { useCart } from '../../../../context/cart.context';

export default function ListComponent(props) {
  const { title, price, description, thumbnail, deleteWishlistItems, id, index } = props;
  //* context
  const { cart, setCart } = useCart();

  const addToCart = () => {
    const newItem = {
        id,
        title,
        description,
        price,
        quantity: 1,
        thumbnail,
    }
    const existingProduct = cart.find(product => (product?.id === id));

    if (existingProduct) {
        setCart(preProducts => (
            preProducts.map(
                item => (
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                )
            )
        ))
    } else {
        setCart(preProducts => ([...preProducts, newItem]))

    }

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
        <div className="list-right">
          <button className='Buy-Now'>Buy Now</button>
          <button
            className='cart'
            onClick={() => { addToCart() }}>
            <FaCartPlus />
          </button>
          <button
            className='cart red'
            onClick={() => {deleteWishlistItems(index)}}>
            <MdDelete />
          </button>
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
  .list-right{
    display: flex;
    align-items: center;
  
    gap: 0.5rem;
  }
  .Buy-Now {
    border-radius: 0.4rem;
    margin-top: 1rem;
    outline: 0;
    border: 3px solid #8e2dec;
    height: 50px;
    width: 122px;
    font-size: 16px;
    font-weight: 800;
    color: white;
    background-color: #8e2dec;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    flex-grow: unset;
    &:hover {
      opacity: 0.8;
    }
  }

  .cart {
    border-radius: 0.4rem;
    margin-top: 1rem;
    outline: 0;
    border: 2px solid #6b6b6bb6;
    height: 50px;
    width: 50px;
    font-size: 16px;
    font-weight: 800;
    color: #6b6b6bb6;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    flex-grow: unset;
    &:hover {
      color: rgba(0, 0, 0, 0.681);
      border: 2px solid rgba(0, 0, 0, 0.681);
    }
  }
  .red{
    &:hover {
      color: red;
      border: 2px solid red;
    }
  }

`