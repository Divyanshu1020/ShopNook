import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/cart.context';
import { convertInPricrFormate } from '../../helper/convertInPriceFormat';


export default function Product({ title, description, price, thumbnail, id }) {
  //* Context
  const { cart, setCart } = useCart();

  const addToCart = function () {
    const newItem = {
      id,
      title,
      description,
      price,
      quantity: 1,
      thumbnail,
    }
    //* check if the product is already in the cart
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
    <div className='product-card' >
    <Link to={`product/${id}`}>
      <div className='card-container'>
        <div className="card-img">
          <img loading="lazy" src={thumbnail} alt="" />
        </div>
        <div className="card-details">
          <div className="product-price">{convertInPricrFormate(price)}</div>
          <div className="product-name">{title}</div>
          <div className="product-details">{description}</div>
        </div>
      </div>
      <div className="card-button">
        <button
          className='product-button'
          onClick={() => { addToCart() }}>
          ADD TO CART
        </button>
      </div>
      </Link>
    </div>
  )
}
