import React from 'react';
import { Link } from 'react-router-dom';
import { convertInPricrFormate } from '../../helper/convertInPriceFormat';
import './Product.css';
import useUpdateContext from '../../util/useUpdateContext';


export default function Product({ title, description, price, thumbnail, id }) {

  const {updateCart} = useUpdateContext()

  const addToCart = function () {
    const newItem = {
      productId: id,
      productQuantity: 1,
      productDetails: {
        description,
        price,
        actualPrice: 0,
        thumbnail,
      },
    }
    updateCart(newItem)
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
