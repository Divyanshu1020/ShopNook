import React from 'react'
import './Product.css'
import card from '../../../assets/products/earbuds-prod-1.webp'
export default function Product() {
  return (
    <div className='product-card'>
        <div className="card-img">
            <img src={card} alt="" />
        </div>
        <div className="card-details">
            <div className="product-name">Headkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkphone</div>
            <div className="product-price">&#8377; 9500</div>
        </div>

    </div>
  )
}
