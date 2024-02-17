import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cart.context';
import './Product.css';
import { convertInPricrFormate } from '../../helper/convertInPriceFormat';


export default function Product({ title, description, price, thumbnail, id }) {

  const { cart, setCart } = useCart();
  const navigate = useNavigate();

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
  const productCardClickHandler = () => {
    navigate(`product/${id}`)
  }

  return (
    <div className='product-card' >
      <div className='card-container' onClick={() => { productCardClickHandler() }}>
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
    </div>
  )
}
