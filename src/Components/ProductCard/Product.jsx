import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/cart.context';
import { convertInPricrFormate } from '../../helper/convertInPriceFormat';
import './Product.css';


export default function Product({ title, description, price, thumbnail, id }) {
  const { cart, setCart, setUpdate } = useCart();


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
          item => {
            if (item.id === id) {
              const newQuantity = item.quantity + 1;
              setUpdate({ id, quantity: newQuantity })
              return item.id === id ? { ...item, quantity: newQuantity } : item
            }
          }
        )
      ))
    } else {
      //* Add new product in cartContext
      setCart(preProducts => ([...preProducts, newItem]));
      setUpdate({ id, quantity: 1 })
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
      </Link>
      <div className="card-button">
        <button
          className='product-button'
          onClick={() => { addToCart() }}>
          ADD TO CART
        </button>
      </div>
    </div>
  )
}
