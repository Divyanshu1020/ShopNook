import React from 'react'
import './Product.css'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import card from '../../../assets/products/earbuds-prod-1.webp'
export default function Product() {
  return (
    <div className='product-card'>
        <div className="card-img">
            <img src={card} alt="" />
        </div>
        <div className="card-details">
          <div className="product-price">&#8377; 9500</div>
          <div className="product-name">Headphone khivdnkvndvdvdvvvv</div>
          <div className="product-details">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia labore quia sit quas corporis ad architecto temporibus dolorem suscipit delectus asperiores, cumque voluptates repellendus nobis? Id placeat voluptates vitae at.</div>
        </div>
        <div className="card-button"><button className='product-button'>ADD TO CART</button></div>
    </div>
  )
}
